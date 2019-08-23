GET movies/_search?q=Dark

// {
//     "took": 22,
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
//         "max_score": 1.7056938,
//         "hits": [
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "58559",
//                 "_score": 1.7056938,
//                 "_source": {
//                     "id": "58559",
//                     "title": "Dark Knight, The",
//                     "year": 2008,
//                     "genre": [
//                         "Action",
//                         "Crime",
//                         "Drama",
//                         "IMAX"
//                     ]
//                 }
//             }
//         ]
//     }
// }


DELETE movies/_doc/58559

// {
//     "_index": "movies",
//     "_type": "_doc",
//     "_id": "58559",
//     "_version": 2,
//     "result": "deleted",
//     "_shards": {
//         "total": 2,
//         "successful": 1,
//         "failed": 0
//     },
//     "_seq_no": 8,
//     "_primary_term": 1
// }


GET movies/_search?q=Dark

// {
//     "took": 145,
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