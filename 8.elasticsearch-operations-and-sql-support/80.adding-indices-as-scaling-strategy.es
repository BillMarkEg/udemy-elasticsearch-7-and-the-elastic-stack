GET /shakespeare/_settings

// {
//     "shakespeare": {
//         "settings": {
//             "index": {
//                 "creation_date": "1566486485897",
//                 "number_of_shards": "1",
//                 "number_of_replicas": "1",
//                 "uuid": "N_nBapCRTQ2aib0TVE9JPA",
//                 "version": {
//                     "created": "7030099"
//                 },
//                 "provided_name": "shakespeare"
//             }
//         }
//     }
// }


PUT /testindex
{
    "settings": {
        "number_of_shards":3,
        "number_of_replicas": 1
    }
}

// {
//     "acknowledged": true,
//     "shards_acknowledged": true,
//     "index": "testindex"
// }


GET /testindex/_settings

// {
//     "testindex": {
//         "settings": {
//             "index": {
//                 "creation_date": "1569164561496",
//                 "number_of_shards": "3",
//                 "number_of_replicas": "1",
//                 "uuid": "dKHv3VrEQCCOSirdGzaMag",
//                 "version": {
//                     "created": "7030099"
//                 },
//                 "provided_name": "testindex"
//             }
//         }
//     }
// }