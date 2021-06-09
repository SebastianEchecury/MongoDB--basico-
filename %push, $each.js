//con $push le estoy agregando al final del arreglo comentarios los campos nombre, email y contenido, c/u con su valor.
//si no existe el arreglo, lo crea
db.blog.update({"_id":ObjectId("60bffd1946716aa12ac775ad")},
{"$push":{"comentarios":
{"nombre":"Ivan", "emai":"juan@ejemplo.com","contenido":"Comentario de juan"}}})

db.blog.update({"_id":ObjectId("60bffd1946716aa12ac775ad")},
{"$push":{"comentarios":
{"nombre":"Pablo", "emai":"pablo@ejemplo.com","contenido":"Comentario de pablo"}}})


//si uso $each con $push puedo agregar mas de 1 comentarios
db.blog.update({"_id":ObjectId("60bffd1946716aa12ac775ad")},
{"$push":{"comentarios":
            {"$each":[
                {"nombre":"Maria", "emai":"maria@ejemplo.com","contenido":"Comentario de maria"},
                {"nombre":"Pedro", "emai":"pedro@ejemplo.com","contenido":"Comentario de pedro"}]}
                }})