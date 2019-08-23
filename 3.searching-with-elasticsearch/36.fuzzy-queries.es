GET movies/_search 
{
    "query": {
        "match": { "title": "intursteller" }
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
        "fuzzy": {
            "title": { "value": "intersteller", "fuzziness": 1 }
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
//         "max_score": 1.8191156,
//         "hits": [
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "109487",
//                 "_score": 1.8191156,
//                 "_source": {
//                     "id": "109487",
//                     "title": "Interstellar",
//                     "year": 2014,
//                     "genre": [
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
        "fuzzy": {
            "title": { "value": "intursteller", "fuzziness": 2 }
        }
    }
}

// {
//     "took": 4,
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
//         "max_score": 1.6537415,
//         "hits": [
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "109487",
//                 "_score": 1.6537415,
//                 "_source": {
//                     "id": "109487",
//                     "title": "Interstellar",
//                     "year": 2014,
//                     "genre": [
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
        "fuzzy": {
            "title": { "value": "warz", "fuzziness": "auto"  }
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
//         "max_score": 0.77331555,
//         "hits": [
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "122886",
//                 "_score": 0.77331555,
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