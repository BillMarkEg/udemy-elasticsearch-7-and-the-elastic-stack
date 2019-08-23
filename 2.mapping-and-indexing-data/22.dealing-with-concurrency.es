GET movies/_doc/109487

// {
//     "_index": "movies",
//     "_type": "_doc",
//     "_id": "109487",
//     "_version": 4,
//     "_seq_no": 7,
//     "_primary_term": 1,
//     "found": true,
//     "_source": {
//         "genres": [
//             "IMAX",
//             "Sci-Fi"
//         ],
//         "title": "Interstellar",
//         "year": 2014
//     }
// }


PUT movies/_doc/109487?if_seq_no=7&if_primary_term=1
{
    "genres": ["IMAX", "Sci-Fi"],
    "title": "Interstellar foo",
    "year": 2014
}

// {
//     "_index": "movies",
//     "_type": "_doc",
//     "_id": "109487",
//     "_version": 5,
//     "result": "updated",
//     "_shards": {
//         "total": 2,
//         "successful": 1,
//         "failed": 0
//     },
//     "_seq_no": 13,
//     "_primary_term": 1
// }


PUT movies/_doc/109487?if_seq_no=7&if_primary_term=1
{
    "genres": ["IMAX", "Sci-Fi"],
    "title": "Interstellar bar",
    "year": 2014
}

// {
//     "error": {
//         "root_cause": [
//             {
//                 "type": "version_conflict_engine_exception",
//                 "reason": "[109487]: version conflict, required seqNo [7], primary term [1]. current document has seqNo [13] and primary term [1]",
//                 "index_uuid": "JOXF4OZnTsivnxnd9Oge1Q",
//                 "shard": "0",
//                 "index": "movies"
//             }
//         ],
//         "type": "version_conflict_engine_exception",
//         "reason": "[109487]: version conflict, required seqNo [7], primary term [1]. current document has seqNo [13] and primary term [1]",
//         "index_uuid": "JOXF4OZnTsivnxnd9Oge1Q",
//         "shard": "0",
//         "index": "movies"
//     },
//     "status": 409
// }


PUT movies/_doc/109487?if_seq_no=13&if_primary_term=1
{
    "genres": ["IMAX", "Sci-Fi"],
    "title": "Interstellar bar",
    "year": 2014
}

// {
//     "_index": "movies",
//     "_type": "_doc",
//     "_id": "109487",
//     "_version": 6,
//     "result": "updated",
//     "_shards": {
//         "total": 2,
//         "successful": 1,
//         "failed": 0
//     },
//     "_seq_no": 14,
//     "_primary_term": 1
// }


POST movies/_doc/109487/_update?retry_on_conflict=5
{
    "doc": {
        "title": "Interstellar typo"
    }
}

// {
//     "_index": "movies",
//     "_type": "_doc",
//     "_id": "109487",
//     "_version": 7,
//     "result": "updated",
//     "_shards": {
//         "total": 2,
//         "successful": 1,
//         "failed": 0
//     },
//     "_seq_no": 15,
//     "_primary_term": 1
// }


GET movies/_doc/109487

// {
//     "_index": "movies",
//     "_type": "_doc",
//     "_id": "109487",
//     "_version": 7,
//     "_seq_no": 15,
//     "_primary_term": 1,
//     "found": true,
//     "_source": {
//         "genres": [
//             "IMAX",
//             "Sci-Fi"
//         ],
//         "title": "Interstellar typo",
//         "year": 2014
//     }
// }


POST movies/_doc/109487/_update?retry_on_conflict=5
{
    "doc": {
        "title": "Interstellar"
    }
}

// {
//     "_index": "movies",
//     "_type": "_doc",
//     "_id": "109487",
//     "_version": 8,
//     "result": "updated",
//     "_shards": {
//         "total": 2,
//         "successful": 1,
//         "failed": 0
//     },
//     "_seq_no": 16,
//     "_primary_term": 1
// }