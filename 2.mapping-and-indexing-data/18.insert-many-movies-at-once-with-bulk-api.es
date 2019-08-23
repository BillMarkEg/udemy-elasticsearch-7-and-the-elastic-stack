// wget http://media.sundog-soft.com/es7/movies.json -O data/movies.json
// curl -H "Content-Type: application/json" -XPUT localhost:9200/_bulk?pretty --data-binary @data/movies.json


GET movies/_search

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
//             "value": 5,
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
//             },
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "135569",
//                 "_score": 1,
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
//                 "_score": 1,
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
//                 "_id": "58559",
//                 "_score": 1,
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
//             },
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "1924",
//                 "_score": 1,
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