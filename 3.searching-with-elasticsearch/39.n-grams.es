// $ curl -XDELETE localhost:9200/movies
// >>> {"acknowledged":true}


PUT movies
{
    "settings": {
        "analysis": {
            "filter": {
                "autocomplete_filter": {
                    "type": "edge_ngram",
                    "min_gram": 1,
                    "max_gram": 20
                }
            },
            "analyzer": {
                "autocomplete": {
                    "type": "custom",
                    "tokenizer": "standard",
                    "filter": [
                        "lowercase",
                        "autocomplete_filter"
                    ]
                }
            }
        }
    }
}

// {
//     "acknowledged": true,
//     "shards_acknowledged": true,
//     "index": "movies"
// }


GET movies/_analyze
{
    "analyzer": "autocomplete",
    "text": "Sta"
}

// {
//     "tokens": [
//         {
//             "token": "s",
//             "start_offset": 0,
//             "end_offset": 3,
//             "type": "<ALPHANUM>",
//             "position": 0
//         },
//         {
//             "token": "st",
//             "start_offset": 0,
//             "end_offset": 3,
//             "type": "<ALPHANUM>",
//             "position": 0
//         },
//         {
//             "token": "sta",
//             "start_offset": 0,
//             "end_offset": 3,
//             "type": "<ALPHANUM>",
//             "position": 0
//         }
//     ]
// }


PUT movies/_mapping
{
    "properties": {
        "title": {
            "type": "text",
            "analyzer": "autocomplete"
        }
    }
}

// {
//     "acknowledged": true
// }


GET movies/_search
{
    "query": {
        "match": { "title": "sta" }
    }
}

// {
//     "took": 619,
//     "timed_out": false,
//     "_shards": {
//         "total": 1,
//         "successful": 1,
//         "skipped": 0,
//         "failed": 0
//     },
//     "hits": {
//         "total": {
//             "value": 3,
//             "relation": "eq"
//         },
//         "max_score": 1.0316167,
//         "hits": [
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "135569",
//                 "_score": 1.0316167,
//                 "_source": {
//                     "id": "135569",
//                     "title": "Star Trek Beyond",
//                     "year": 2016,
//                     "genre": [
//                         "Action",
//                         "Adventure",
//                         "Sci-Fi"
//                     ]
//                 }
//             },
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "122886",
//                 "_score": 0.97565186,
//                 "_source": {
//                     "id": "122886",
//                     "title": "Star Wars: Episode VII - The Force Awakens",
//                     "year": 2015,
//                     "genre": [
//                         "Action",
//                         "Adventure",
//                         "Fantasy",
//                         "Sci-Fi",
//                         "IMAX"
//                     ]
//                 }
//             },
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "1924",
//                 "_score": 0.7663857,
//                 "_source": {
//                     "id": "1924",
//                     "title": "Plan 9 from Outer Space",
//                     "year": 1959,
//                     "genre": [
//                         "Horror",
//                         "Sci-Fi"
//                     ]
//                 }
//             }
//         ]
//     }
// }


GET movies/_search
{
    "query": {
        "match": { 
            "title": {
                "query": "sta",
                "analyzer": "standard"
            }
        }
    }
}

// {
//     "took": 1,
//     "timed_out": false,
//     "_shards": {
//         "total": 1,
//         "successful": 1,
//         "skipped": 0,
//         "failed": 0
//     },
//     "hits": {
//         "total": {
//             "value": 2,
//             "relation": "eq"
//         },
//         "max_score": 1.3298091,
//         "hits": [
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "135569",
//                 "_score": 1.3298091,
//                 "_source": {
//                     "id": "135569",
//                     "title": "Star Trek Beyond",
//                     "year": 2016,
//                     "genre": [
//                         "Action",
//                         "Adventure",
//                         "Sci-Fi"
//                     ]
//                 }
//             },
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "122886",
//                 "_score": 1.1700189,
//                 "_source": {
//                     "id": "122886",
//                     "title": "Star Wars: Episode VII - The Force Awakens",
//                     "year": 2015,
//                     "genre": [
//                         "Action",
//                         "Adventure",
//                         "Fantasy",
//                         "Sci-Fi",
//                         "IMAX"
//                     ]
//                 }
//             }
//         ]
//     }
// }


GET movies/_search
{
    "query": {
        "match": { 
            "title": {
                "query": "star tr",
                "analyzer": "standard"
            }
        }
    }
}

// {
//     "took": 2,
//     "timed_out": false,
//     "_shards": {
//         "total": 1,
//         "successful": 1,
//         "skipped": 0,
//         "failed": 0
//     },
//     "hits": {
//         "total": {
//             "value": 2,
//             "relation": "eq"
//         },
//         "max_score": 3.435546,
//         "hits": [
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "135569",
//                 "_score": 3.435546,
//                 "_source": {
//                     "id": "135569",
//                     "title": "Star Trek Beyond",
//                     "year": 2016,
//                     "genre": [
//                         "Action",
//                         "Adventure",
//                         "Sci-Fi"
//                     ]
//                 }
//             },
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "122886",
//                 "_score": 1.1700189,
//                 "_source": {
//                     "id": "122886",
//                     "title": "Star Wars: Episode VII - The Force Awakens",
//                     "year": 2015,
//                     "genre": [
//                         "Action",
//                         "Adventure",
//                         "Fantasy",
//                         "Sci-Fi",
//                         "IMAX"
//                     ]
//                 }
//             }
//         ]
//     }
// }