GET movies/_search
{
    "query": {
        "bool": {
            "must": { "match":{ "genre": "Sci-Fi "} },
            "must_not": { "match": { "title": "trek" } },
            "filter": { "range": { "year": { "gte": 2010, "lt": 2015 } } }
        }
    }
}

// {
//     "took": 9,
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
//         "max_score": 0.640912,
//         "hits": [
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "109487",
//                 "_score": 0.640912,
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