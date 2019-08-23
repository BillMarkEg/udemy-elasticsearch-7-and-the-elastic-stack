PUT movies
{
    "mappings": {
        "properties": {
            "year": {
                "type": "date"
            }
        }
    }
}

// {
//     "acknowledged": true,
//     "shards_acknowledged": true,
//     "index": "movies"
// }


GET movies/_mapping

// {
//     "movies": {
//         "mappings": {
//             "properties": {
//                 "year": {
//                     "type": "date"
//                 }
//             }
//         }
//     }
// }


POST movies/_doc/109487
{
    "genre": ["IMAX", "Sci-Fi"],
    "title": "Interstellar",
    "year": 2014
}

// {
//     "_index": "movies",
//     "_type": "_doc",
//     "_id": "109487",
//     "_version": 1,
//     "result": "created",
//     "_shards": {
//         "total": 2,
//         "successful": 1,
//         "failed": 0
//     },
//     "_seq_no": 0,
//     "_primary_term": 1
}


GET movies/_search

// {
//     "took": 178,
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
//         "max_score": 1,
//         "hits": [
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "109487",
//                 "_score": 1,
//                 "_source": {
//                     "genre": [
//                         "IMAX",
//                         "Sci-Fi"
//                     ],
//                     "title": "Interstellar",
//                     "year": 2014
//                 }
//             }
//         ]
//     }
// }