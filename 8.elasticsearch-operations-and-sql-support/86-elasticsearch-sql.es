POST _xpack/sql
{
    "query": "DESCRIBE movies"
}

// {
//     "columns": [
//         {
//             "name": "column",
//             "type": "keyword"
//         },
//         {
//             "name": "type",
//             "type": "keyword"
//         },
//         {
//             "name": "mapping",
//             "type": "keyword"
//         }
//     ],
//     "rows": [
//         [
//             "genre",
//             "VARCHAR",
//             "text"
//         ],
//         [
//             "genre.keyword",
//             "VARCHAR",
//             "keyword"
//         ],
//         [
//             "id",
//             "VARCHAR",
//             "text"
//         ],
//         [
//             "id.keyword",
//             "VARCHAR",
//             "keyword"
//         ],
//         [
//             "title",
//             "VARCHAR",
//             "text"
//         ],
//         [
//             "title.keyword",
//             "VARCHAR",
//             "keyword"
//         ],
//         [
//             "year",
//             "BIGINT",
//             "long"
//         ]
//     ]
// }


POST _xpack/sql?format=txt
{
    "query": "DESCRIBE movies"
}

//     column     |     type      |    mapping    
// ---------------+---------------+---------------
// genre          |VARCHAR        |text           
// genre.keyword  |VARCHAR        |keyword        
// id             |VARCHAR        |text           
// id.keyword     |VARCHAR        |keyword        
// title          |VARCHAR        |text           
// title.keyword  |VARCHAR        |keyword        
// year           |BIGINT         |long           


POST _xpack/sql?format=txt
{
    "query": "SELECT title FROM movies LIMIT 10"
}

//            title           
// ---------------------------
// Toy Story                  
// Jumanji                    
// Grumpier Old Men           
// Waiting to Exhale          
// Father of the Bride Part II
// Heat                       
// Sabrina                    
// Tom and Huck               
// Sudden Death               
// GoldenEye                  


POST _xpack/sql?format=txt
{
    "query": "SELECT title, year FROM movies WHERE year < 1920 ORDER BY year"
}

//                      title                      |     year      
// ------------------------------------------------+---------------
// Trip to the Moon, A                             |1902           
// The Great Train Robbery                         |1903           
// The Electric Hotel                              |1908           
// Birth of a Nation, The                          |1915           
// Intolerance: Love's Struggle Throughout the Ages|1916           
// 20,000 Leagues Under the Sea                    |1916           
// Snow White                                      |1916           
// Rink, The                                       |1916           
// Immigrant, The                                  |1917           
// Daddy Long Legs                                 |1919           


POST _xpack/sql/translate
{
    "query": "SELECT title, year FROM movies WHERE year < 1920 ORDER BY year"
}

// {
//     "size": 1000,
//     "query": {
//         "range": {
//             "year": {
//                 "from": null,
//                 "to": 1920,
//                 "include_lower": false,
//                 "include_upper": false,
//                 "boost": 1
//             }
//         }
//     },
//     "_source": {
//         "includes": [
//             "title"
//         ],
//         "excludes": []
//     },
//     "docvalue_fields": [
//         {
//             "field": "year"
//         }
//     ],
//     "sort": [
//         {
//             "year": {
//                 "order": "asc",
//                 "missing": "_last",
//                 "unmapped_type": "long"
//             }
//         }
//     ]
// }