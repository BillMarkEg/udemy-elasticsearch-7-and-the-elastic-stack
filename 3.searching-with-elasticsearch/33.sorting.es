GET movies/_search?sort=year

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
//             "value": 5,
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
//                     1959
//                 ]
//             },
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "58559",
//                 "_score": null,
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
//                 },
//                 "sort": [
//                     2008
//                 ]
//             },
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "109487",
//                 "_score": null,
//                 "_source": {
//                     "id": "109487",
//                     "title": "Interstellar",
//                     "year": 2014,
//                     "genre": [
//                         "Sci-Fi",
//                         "IMAX"
//                     ]
//                 },
//                 "sort": [
//                     2014
//                 ]
//             },
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "122886",
//                 "_score": null,
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
//                 },
//                 "sort": [
//                     2015
//                 ]
//             },
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "135569",
//                 "_score": null,
//                 "_source": {
//                     "id": "135569",
//                     "title": "Star Trek Beyond",
//                     "year": 2016,
//                     "genre": [
//                         "Action",
//                         "Adventure",
//                         "Sci-Fi"
//                     ]
//                 },
//                 "sort": [
//                     2016
//                 ]
//             }
//         ]
//     }
// }


GET movies/_search?sort=title

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
//                 "index": "movies",
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


// $ curl -XDELETE localhost:9200/movies
// {"acknowledged":true}


PUT movies
{
    "mappings": {
        "properties": {
            "title": {
                "type": "text",
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
//     "index": "movies"
// }


// $ curl -XPUT localhost:9200/_bulk?pretty --data-binary @data/movies.json
// >>> ...

GET movies/_search?sort=title.raw

// {
//     "took": 789,
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
//         "max_score": null,
//         "hits": [
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "58559",
//                 "_score": null,
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
//                 },
//                 "sort": [
//                     "Dark Knight, The"
//                 ]
//             },
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "109487",
//                 "_score": null,
//                 "_source": {
//                     "id": "109487",
//                     "title": "Interstellar",
//                     "year": 2014,
//                     "genre": [
//                         "Sci-Fi",
//                         "IMAX"
//                     ]
//                 },
//                 "sort": [
//                     "Interstellar"
//                 ]
//             },
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
//             },
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "135569",
//                 "_score": null,
//                 "_source": {
//                     "id": "135569",
//                     "title": "Star Trek Beyond",
//                     "year": 2016,
//                     "genre": [
//                         "Action",
//                         "Adventure",
//                         "Sci-Fi"
//                     ]
//                 },
//                 "sort": [
//                     "Star Trek Beyond"
//                 ]
//             },
//             {
//                 "_index": "movies",
//                 "_type": "_doc",
//                 "_id": "122886",
//                 "_score": null,
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
//                 },
//                 "sort": [
//                     "Star Wars: Episode VII - The Force Awakens"
//                 ]
//             }
//         ]
//     }
// }


