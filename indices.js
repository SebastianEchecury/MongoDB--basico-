db.posts.getIndexes()
//Por defecto tengo 1 indice, que es el que crea MongoDB con el id

//Indico el campo a crear el indice y el orden (ascendente o descendente)
db.posts.createIndex({"etiquetas":1})

//Para crear un indice de un documento embebido uso la notacion del punto
db.posts.createIndex({"autor.email":1})

//busco por el indice etiquetas que cree, que la etiqueta sea programacion
db.posts.find({
    "etiquetas":{
        "$all":["programacion"]
        }
    })
    
db.posts.find({"autor.email":"grover@mail.com"})


//Indices unicos
db.personas.getIndexes()
db.personas.createIndex({"email":1},{unique:true})

//Indices compuestos (el subdocumento es el indice)
db.posts.createIndex({"autor":1})


//Eliminar indices
db.personas.dropIndex({"email":1})
db.posts.dropIndexes()
