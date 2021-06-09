//con $inc aumento en 1 el valor de visitas del documento con url www.udemy..
db.blog.update({"URL":"www.udemy.com"},{"$inc":{"visitas":1}})

//con $inc aumento en 5 el valor de visitas del documento con url www.udemy..
db.blog.update({"URL":"www.udemy.com"},{"$inc":{"visitas":5}})

//Puedo poner el incremento que quiera con $inc, tambien le puedo poner numeros negativos
//Si modifico un campo que no existe, lo agrega


//Si quiero agregarle un campo a un documento, lo hago en un update con el modificador $set
db.blog.update({"_id":ObjectId("60bff75046716aa12ac774f1")},{"$set":{"libro":"harry potter"}})
//Tambien lo puedo usar para actualizar el valor de un campo existente. Ademas podria cambiar el tipo de campo.

//Asi agrego un arreglo llamado comidaFavorita con los valores Pizza y Hamburguesa 
db.blog.update({"_id":ObjectId("60bff75046716aa12ac774f1")},{"$set":{"comidaFavorita":["Pizza","Hamburguesa"]}})


//con $unset borro un campo
db.blog.update({"_id":ObjectId("60bff75046716aa12ac774f1")},{"$unset":{"comidaFavorita":0}})