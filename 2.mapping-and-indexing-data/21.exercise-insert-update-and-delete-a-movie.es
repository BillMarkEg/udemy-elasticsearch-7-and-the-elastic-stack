POST movies/_doc/80085
{
    "genre": ["IMAX", "Comedy"],
    "title": "Kevin Eating The Broccoli Stem First",
    "year": 2011
}

// {
//     "_index": "movies",
//     "_type": "_doc",
//     "_id": "80085",
//     "_version": 1,
//     "result": "created",
//     "_shards": {
//         "total": 2,
//         "successful": 1,
//         "failed": 0
//     },
//     "_seq_no": 9,
//     "_primary_term": 1
// }


GET movies/_doc/80085

// {
//     "_index": "movies",
//     "_type": "_doc",
//     "_id": "80085",
//     "_version": 1,
//     "_seq_no": 9,
//     "_primary_term": 1,
//     "found": true,
//     "_source": {
//         "genre": [
//             "IMAX",
//             "Comedy"
//         ],
//         "title": "Kevin Eating The Broccoli Stem First",
//         "year": 2011
//     }
// }


PUT movies/_doc/80085
{
    "genre": ["IMAX", "Comedy"],
    "title": "Kevin Eating The Broccoli Stem First (PUT)",
    "year": 2011
}

// {
//     "_index": "movies",
//     "_type": "_doc",
//     "_id": "80085",
//     "_version": 2,
//     "result": "updated",
//     "_shards": {
//         "total": 2,
//         "successful": 1,
//         "failed": 0
//     },
//     "_seq_no": 10,
//     "_primary_term": 1
// }


GET movies/_doc/80085

// {
//     "_index": "movies",
//     "_type": "_doc",
//     "_id": "80085",
//     "_version": 2,
//     "_seq_no": 10,
//     "_primary_term": 1,
//     "found": true,
//     "_source": {
//         "genre": [
//             "IMAX",
//             "Comedy"
//         ],
//         "title": "Kevin Eating The Broccoli Stem First (PUT)",
//         "year": 2011
//     }
// }


POST movies/_doc/80085/_update
{
    "doc": {
        "title": "Kevin Eating The Broccoli Stem First (POST)"
    }
}

// {
//     "_index": "movies",
//     "_type": "_doc",
//     "_id": "80085",
//     "_version": 3,
//     "result": "updated",
//     "_shards": {
//         "total": 2,
//         "successful": 1,
//         "failed": 0
//     },
//     "_seq_no": 11,
//     "_primary_term": 1
// }


GET movies/_doc/80085

// {
//     "_index": "movies",
//     "_type": "_doc",
//     "_id": "80085",
//     "_version": 3,
//     "_seq_no": 11,
//     "_primary_term": 1,
//     "found": true,
//     "_source": {
//         "genre": [
//             "IMAX",
//             "Comedy"
//         ],
//         "title": "Kevin Eating The Broccoli Stem First (POST)",
//         "year": 2011
//     }
// }


DELETE movies/_doc/80085

// {
//     "_index": "movies",
//     "_type": "_doc",
//     "_id": "80085",
//     "_version": 4,
//     "result": "deleted",
//     "_shards": {
//         "total": 2,
//         "successful": 1,
//         "failed": 0
//     },
//     "_seq_no": 12,
//     "_primary_term": 1
// }


GET movies/_doc/80085

// {
//     "_index": "movies",
//     "_type": "_doc",
//     "_id": "80085",
//     "found": false
// }