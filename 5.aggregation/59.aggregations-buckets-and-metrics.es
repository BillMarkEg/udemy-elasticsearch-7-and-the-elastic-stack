GET ratings/_search?size=0
{
    "aggs": {
        "ratings": {
            "terms": {
                "field": "rating"
            }
        }
    }
}

// {
//     "took": 43,
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
//         "ratings": {
//             "doc_count_error_upper_bound": 0,
//             "sum_other_doc_count": 0,
//             "buckets": [
//                 {
//                     "key": 4,
//                     "doc_count": 26818
//                 },
//                 {
//                     "key": 3,
//                     "doc_count": 20047
//                 },
//                 {
//                     "key": 5,
//                     "doc_count": 13211
//                 },
//                 {
//                     "key": 3.5,
//                     "doc_count": 13136
//                 },
//                 {
//                     "key": 4.5,
//                     "doc_count": 8551
//                 },
//                 {
//                     "key": 2,
//                     "doc_count": 7551
//                 },
//                 {
//                     "key": 2.5,
//                     "doc_count": 5550
//                 },
//                 {
//                     "key": 1,
//                     "doc_count": 2811
//                 },
//                 {
//                     "key": 1.5,
//                     "doc_count": 1791
//                 },
//                 {
//                     "key": 0.5,
//                     "doc_count": 1370
//                 }
//             ]
//         }
//     }
// }


GET ratings/_search?size=0
{
    "query": {
        "match": {  "rating": 5.0 }
    },
    "aggs": {
        "ratings": {
            "terms": { "field": "rating" }
        }
    }
}

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
//             "value": 10000,
//             "relation": "gte"
//         },
//         "max_score": null,
//         "hits": []
//     },
//     "aggregations": {
//         "ratings": {
//             "doc_count_error_upper_bound": 0,
//             "sum_other_doc_count": 0,
//             "buckets": [
//                 {
//                     "key": 5,
//                     "doc_count": 13211
//                 }
//             ]
//         }
//     }
// }


GET ratings/_search?size=0
{
    "query": {
        "match_phrase": { "title": "Star Wars Episode IV"}
    },
    "aggs": {
        "avg_rating": {
            "avg": { "field": "rating" }
        }
    }
}

// {
//     "took": 10,
//     "timed_out": false,
//     "_shards": {
//         "total": 1,
//         "successful": 1,
//         "skipped": 0,
//         "failed": 0
//     },
//     "hits": {
//         "total": {
//             "value": 251,
//             "relation": "eq"
//         },
//         "max_score": null,
//         "hits": []
//     },
//     "aggregations": {
//         "avg_rating": {
//             "value": 4.231075697211155
//         }
//     }
// }