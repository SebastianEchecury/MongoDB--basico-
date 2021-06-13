db.ordenes.aggregate(
    [
        {"$match":{"estado":"A"}},
        {"$group":{_id:"$cliente_id", total:{"$sum":"$cantidad"}}}
    ]
)