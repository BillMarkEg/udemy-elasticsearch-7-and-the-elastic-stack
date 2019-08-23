PUT movies/_doc/109487/
{
    "genres": ["IMAX", "Sci-Fi"],
    "title": "Interstellar foo",
    "year": 2014
}

// {
//     "_index": "movies",
//     "_type": "_doc",
//     "_id": "109487",
//     "_version": 2,
//     "result": "updated",
//     "_shards": {
//         "total": 2,
//         "successful": 1,
//         "failed": 0
//     },
//     "_seq_no": 5,
//     "_primary_term": 1
// }


GET movies/_doc/109487

// {
//     "_index": "movies",
//     "_type": "_doc",
//     "_id": "109487",
//     "_version": 2,
//     "_seq_no": 5,
//     "_primary_term": 1,
//     "found": true,
//     "_source": {
//         "genres": [
//             "IMAX",
//             "Sci-Fi"
//         ],
//         "title": "Interstellar foo",
//         "year": 2014
//     }
// }


POST movies/_doc/109487/_update
{
    "doc": {
        "title": "Interstellar"
    }
}

// {
//     "_index": "movies",
//     "_type": "_doc",
//     "_id": "109487",
//     "_version": 3,
//     "result": "updated",
//     "_shards": {
//         "total": 2,
//         "successful": 1,
//         "failed": 0
//     },
//     "_seq_no": 6,
//     "_primary_term": 1
// }


GET movies/_doc/109487

// {
//     "_index": "movies",
//     "_type": "_doc",
//     "_id": "109487",
//     "_version": 3,
//     "_seq_no": 6,
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
}


PUT movies/_doc/109487/
{
    "genres": ["IMAX", "Sci-Fi"],
    "title": "Interstellar",
    "year": 2014
}

// {
//     "_index": "movies",
//     "_type": "_doc",
//     "_id": "109487",
//     "_version": 4,
//     "result": "updated",
//     "_shards": {
//         "total": 2,
//         "successful": 1,
//         "failed": 0
//     },
//     "_seq_no": 7,
//     "_primary_term": 1
// }


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