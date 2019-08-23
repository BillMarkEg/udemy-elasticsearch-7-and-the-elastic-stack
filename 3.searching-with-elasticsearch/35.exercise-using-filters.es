GET movies/_search
{
    "query": {
        "bool": {
            "must": { "match": { "genre": "Sci-Fi" } },
            "filter": { "range": { "year": { "lt": 1960 } } }
        }
    },
    "sort": "title.raw"
}


GET movies/_search?sort=title.raw
{
    "query": {
        "bool": {
            "must": { "match": { "genre": "Sci-FI" } },
            "filter": { "range": { "year": { "lt": 1960 } } }
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
//         "max_score": null,
//         "hits": [
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "1924",
//                 "_score": null,
//                 "_source": {
//                     "id": "1924",
//                     "title": "Plan 9 from Outer Space",
//                     "year": 1959,
//                     "genre": [
//                         "Horror",
//                         "Sci-Fi"
//                     ]
//                 },
//                 "sort": [
//                     "Plan 9 from Outer Space"
//                 ]
//             }
//         ]
//     }
// }