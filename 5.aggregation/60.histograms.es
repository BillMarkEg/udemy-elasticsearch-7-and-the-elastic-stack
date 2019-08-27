GET ratings/_search?size=0
{
    "aggs": {
        "whole_ratings": {
            "histogram": {
                "field": "rating",
                "interval": 1.0
            }
        }
    }
}

// {
//     "took": 15,
//     "timed_out": false,
//     "_shards": {
//         "total": 1,
//         "successful": 1,
//         "skipped": 0,
//         "failed": 0
//     },
//     "hits": {
//         "total": {
//             "value": 10000,
//             "relation": "gte"
//         },
//         "max_score": null,
//         "hits": []
//     },
//     "aggregations": {
//         "whole_ratings": {
//             "buckets": [
//                 {
//                     "key": 0,
//                     "doc_count": 1370
//                 },
//                 {
//                     "key": 1,
//                     "doc_count": 4602
//                 },
//                 {
//                     "key": 2,
//                     "doc_count": 13101
//                 },
//                 {
//                     "key": 3,
//                     "doc_count": 33183
//                 },
//                 {
//                     "key": 4,
//                     "doc_count": 35369
//                 },
//                 {
//                     "key": 5,
//                     "doc_count": 13211
//                 }
//             ]
//         }
//     }
// }


GET movies/_search?size=0
{
    "aggs": {
        "release_year": {
            "histogram": {
                "field": "year",
                "interval": 10
            }
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
//             "value": 9683,
//             "relation": "eq"
//         },
//         "max_score": null,
//         "hits": []
//     },
//     "aggregations": {
//         "release_year": {
//             "buckets": [
//                 {
//                     "key": 1900,
//                     "doc_count": 3
//                 },
//                 {
//                     "key": 1910,
//                     "doc_count": 7
//                 },
//                 {
//                     "key": 1920,
//                     "doc_count": 37
//                 },
//                 {
//                     "key": 1930,
//                     "doc_count": 134
//                 },
//                 {
//                     "key": 1940,
//                     "doc_count": 197
//                 },
//                 {
//                     "key": 1950,
//                     "doc_count": 275
//                 },
//                 {
//                     "key": 1960,
//                     "doc_count": 397
//                 },
//                 {
//                     "key": 1970,
//                     "doc_count": 499
//                 },
//                 {
//                     "key": 1980,
//                     "doc_count": 1170
//                 },
//                 {
//                     "key": 1990,
//                     "doc_count": 2196
//                 },
//                 {
//                     "key": 2000,
//                     "doc_count": 2828
//                 },
//                 {
//                     "key": 2010,
//                     "doc_count": 1940
//                 }
//             ]
//         }
//     }
// }