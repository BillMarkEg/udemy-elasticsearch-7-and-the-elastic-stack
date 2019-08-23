GET movies/_search
{
    "query": {
        "match": {
            "title": "Star Trek"
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
//             "value": 2,
//             "relation": "eq"
//         },
//         "max_score": 2.4749134,
//         "hits": [
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "135569",
//                 "_score": 2.4749134,
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
//                 "_score": 0.65114933,
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
        "match_phrase": {
            "title": "Star Trek"
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
//             "value": 1,
//             "relation": "eq"
//         },
//         "max_score": 2.4749134,
//         "hits": [
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "135569",
//                 "_score": 2.4749134,
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
//             }
//         ]
//     }
// }


GET movies/_search
{
    "query": {
        "match_phrase": {
            "genre": "sci"
        }
    }
}

// $ curl -XDELETE localhost:9200/movies
// >>> {"acknowledged":true}

// $ curl -XPUT localhost:9200/movies -d '
// > {
// >     "mappings": {
// >         "properties": {
// >             "id": {
// >                 "type": "integer"
// >             },
// >             "year": {
// >                 "type": "date"
// >             },
// >             "genre": {
// >                 "type": "keyword"
// >             },
// >             "title": {
// >                 "type": "text",
// >                 "analyzer": "english"
// >             }
// >         }
// >     }
// > }'
// >>> {"acknowledged":true,"shards_acknowledged":true,"index":"movies"}

// $ curl -XPUT localhost:9200/_bulk?pretty --data-binary @data/movies.json
// >>> ...


GET movies/_search
{
    "query": {
        "match": {
            "genre": "sci-fi"
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
//             "value": 0,
//             "relation": "eq"
//         },
//         "max_score": null,
//         "hits": []
//     }
// }


GET movies/_search
{
    "query": {
        "match": {
            "genre": "Sci-Fi"
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
//             "value": 4,
//             "relation": "eq"
//         },
//         "max_score": 0.40025333,
//         "hits": [
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "135569",
//                 "_score": 0.40025333,
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
//                 "_score": 0.40025333,
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
//                 "_id": "109487",
//                 "_score": 0.40025333,
//                 "_source": {
//                     "id": "109487",
//                     "title": "Interstellar",
//                     "year": 2014,
//                     "genre": [
//                         "Sci-Fi",
//                         "IMAX"
//                     ]
//                 }
//             },
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "1924",
//                 "_score": 0.40025333,
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
            "title": "star wars"
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
//         "max_score": 1.7228093,
//         "hits": [
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "122886",
//                 "_score": 1.7228093,
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
//                 "_id": "135569",
//                 "_score": 0.919734,
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
//             }
//         ]
//     }
// }