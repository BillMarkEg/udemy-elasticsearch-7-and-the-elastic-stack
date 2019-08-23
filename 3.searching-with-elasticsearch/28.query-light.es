GET movies/_search?q=title:star

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
//         "max_score": 0.919734,
//         "hits": [
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
//             },
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "122886",
//                 "_score": 0.66685396,
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


GET http://localhost:9200/movies/_search?q=+year>2010+title:trek

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
//             "value": 1,
//             "relation": "eq"
//         },
//         "max_score": 1.4563879,
//         "hits": [
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "135569",
//                 "_score": 1.4563879,
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
