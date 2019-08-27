GET ratings/_search?size=0
{
    "query": {
        "match_phrase": {
            "title": "Star Wars"
        }
    },
    "aggs": {
        "titles": {
            "terms": {
                "field": "title"
            },
            "aggs": {
                "avg_rating": {
                    "avg": {
                        "field": "rating"
                    }
                }
            }
        }
    }
}

// {
//     "error": {
//         "root_cause": [
//             {
//                 "type": "illegal_argument_exception",
//                 "reason": "Fielddata is disabled on text fields by default. Set fielddata=true on [title] in order to load fielddata in memory by uninverting the inverted index. Note that this can however use significant memory. Alternatively use a keyword field instead."
//             }
//         ],
//         "type": "search_phase_execution_exception",
//         "reason": "all shards failed",
//         "phase": "query",
//         "grouped": true,
//         "failed_shards": [
//             {
//                 "shard": 0,
//                 "index": "ratings",
//                 "node": "W3Ji4HZPQIaUxhpUsZlPEA",
//                 "reason": {
//                     "type": "illegal_argument_exception",
//                     "reason": "Fielddata is disabled on text fields by default. Set fielddata=true on [title] in order to load fielddata in memory by uninverting the inverted index. Note that this can however use significant memory. Alternatively use a keyword field instead."
//                 }
//             }
//         ],
//         "caused_by": {
//             "type": "illegal_argument_exception",
//             "reason": "Fielddata is disabled on text fields by default. Set fielddata=true on [title] in order to load fielddata in memory by uninverting the inverted index. Note that this can however use significant memory. Alternatively use a keyword field instead.",
//             "caused_by": {
//                 "type": "illegal_argument_exception",
//                 "reason": "Fielddata is disabled on text fields by default. Set fielddata=true on [title] in order to load fielddata in memory by uninverting the inverted index. Note that this can however use significant memory. Alternatively use a keyword field instead."
//             }
//         }
//     },
//     "status": 400
// }


PUT ratings/_mapping
{
    "properties": {
        "title": {
            "type": "text",
            "fielddata": true
        }
    }
}

// {
//     "acknowledged": true
// }


GET ratings/_search?size=0
{
    "query": {
        "match_phrase": {
            "title": "Star Wars"
        }
    },
    "aggs": {
        "titles": {
            "terms": {
                "field": "title"
            },
            "aggs": {
                "avg_rating": {
                    "avg": {
                        "field": "rating"
                    }
                }
            }
        }
    }
}

// {
//     "took": 190,
//     "timed_out": false,
//     "_shards": {
//         "total": 1,
//         "successful": 1,
//         "skipped": 0,
//         "failed": 0
//     },
//     "hits": {
//         "total": {
//             "value": 1062,
//             "relation": "eq"
//         },
//         "max_score": null,
//         "hits": []
//     },
//     "aggregations": {
//         "titles": {
//             "doc_count_error_upper_bound": 0,
//             "sum_other_doc_count": 3424,
//             "buckets": [
//                 {
//                     "key": "star",
//                     "doc_count": 1062,
//                     "avg_rating": {
//                         "value": 3.8587570621468927
//                     }
//                 },
//                 {
//                     "key": "wars",
//                     "doc_count": 1062,
//                     "avg_rating": {
//                         "value": 3.8587570621468927
//                     }
//                 },
//                 {
//                     "key": "episode",
//                     "doc_count": 1009,
//                     "avg_rating": {
//                         "value": 3.8785926660059467
//                     }
//                 },
//                 {
//                     "key": "the",
//                     "doc_count": 779,
//                     "avg_rating": {
//                         "value": 3.7362002567394095
//                     }
//                 },
//                 {
//                     "key": "of",
//                     "doc_count": 367,
//                     "avg_rating": {
//                         "value": 3.742506811989101
//                     }
//                 },
//                 {
//                     "key": "a",
//                     "doc_count": 283,
//                     "avg_rating": {
//                         "value": 4.196113074204947
//                     }
//                 },
//                 {
//                     "key": "1977",
//                     "doc_count": 251,
//                     "avg_rating": {
//                         "value": 4.231075697211155
//                     }
//                 },
//                 {
//                     "key": "hope",
//                     "doc_count": 251,
//                     "avg_rating": {
//                         "value": 4.231075697211155
//                     }
//                 },
//                 {
//                     "key": "iv",
//                     "doc_count": 251,
//                     "avg_rating": {
//                         "value": 4.231075697211155
//                     }
//                 },
//                 {
//                     "key": "new",
//                     "doc_count": 251,
//                     "avg_rating": {
//                         "value": 4.231075697211155
//                     }
//                 }
//             ]
//         }
//     }
// }


DELETE ratings

// {
//     "acknowledged": true
// }

PUT ratings
{
    "mappings": {
        "properties": {
            "title": {
                "type": "text",
                "fielddata": true,
                "fields": {
                    "raw": {
                        "type": "keyword"
                    }
                }
            }
        }
    }
}

// {
//     "acknowledged": true,
//     "shards_acknowledged": true,
//     "index": "ratings"
// }


// $ python IndexRatings.py

GET ratings/_search?size=0
{
    "query": {
        "match_phrase": {
            "title": "Star Wars"
        }
    },
    "aggs": {
        "titles": {
            "terms": {
                "field": "title.raw"
            },
            "aggs": {
                "avg_rating": {
                    "avg": {
                        "field": "rating"
                    }
                }
            }
        }
    }
}

// {
//     "took": 16,
//     "timed_out": false,
//     "_shards": {
//         "total": 1,
//         "successful": 1,
//         "skipped": 0,
//         "failed": 0
//     },
//     "hits": {
//         "total": {
//             "value": 1062,
//             "relation": "eq"
//         },
//         "max_score": null,
//         "hits": []
//     },
//     "aggregations": {
//         "titles": {
//             "doc_count_error_upper_bound": 0,
//             "sum_other_doc_count": 7,
//             "buckets": [
//                 {
//                     "key": "Star Wars: Episode IV - A New Hope (1977)",
//                     "doc_count": 251,
//                     "avg_rating": {
//                         "value": 4.231075697211155
//                     }
//                 },
//                 {
//                     "key": "Star Wars: Episode V - The Empire Strikes Back (1980)",
//                     "doc_count": 211,
//                     "avg_rating": {
//                         "value": 4.2156398104265405
//                     }
//                 },
//                 {
//                     "key": "Star Wars: Episode VI - Return of the Jedi (1983)",
//                     "doc_count": 196,
//                     "avg_rating": {
//                         "value": 4.137755102040816
//                     }
//                 },
//                 {
//                     "key": "Star Wars: Episode I - The Phantom Menace (1999)",
//                     "doc_count": 140,
//                     "avg_rating": {
//                         "value": 3.107142857142857
//                     }
//                 },
//                 {
//                     "key": "Star Wars: Episode II - Attack of the Clones (2002)",
//                     "doc_count": 92,
//                     "avg_rating": {
//                         "value": 3.157608695652174
//                     }
//                 },
//                 {
//                     "key": "Star Wars: Episode III - Revenge of the Sith (2005)",
//                     "doc_count": 78,
//                     "avg_rating": {
//                         "value": 3.4294871794871793
//                     }
//                 },
//                 {
//                     "key": "Star Wars: Episode VII - The Force Awakens (2015)",
//                     "doc_count": 41,
//                     "avg_rating": {
//                         "value": 3.8536585365853657
//                     }
//                 },
//                 {
//                     "key": "Rogue One: A Star Wars Story (2016)",
//                     "doc_count": 27,
//                     "avg_rating": {
//                         "value": 3.925925925925926
//                     }
//                 },
//                 {
//                     "key": "Star Wars: The Last Jedi (2017)",
//                     "doc_count": 12,
//                     "avg_rating": {
//                         "value": 3.125
//                     }
//                 },
//                 {
//                     "key": "Star Wars: The Clone Wars (2008)",
//                     "doc_count": 7,
//                     "avg_rating": {
//                         "value": 2.357142857142857
//                     }
//                 }
//             ]
//         }
//     }
// }