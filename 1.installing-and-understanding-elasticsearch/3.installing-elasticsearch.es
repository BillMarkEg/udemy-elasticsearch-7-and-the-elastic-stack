GET /_search
{
    "query": {
        "match_phrase": {
            "text_entry": "to be or not to be"
        }
    }
}