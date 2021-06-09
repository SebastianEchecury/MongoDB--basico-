//Insertar documento en coleccion prueba
db.prueba.insert({"titulo":"El Quijote"}) 
//Agregar subdocumentos mediante un arreglo
db.prueba.insert([{"_id":0,"nombre":"Carlos"}, {"_id":1,"nombre":"Pedro"}, {"_id":2,"nombre":"Ana"}]);

//Traer documentos de una coleccion
db.prueba.find();

//Remover elementos de una coleccion. El metodo permite agregar una condicion, si no pongo condicion elimina todo
db.prueba.remove({"_id":1}); //Elimina los documentos con id = 1

db.prueba.remove({}) //Asi elimino todo

db.prueba.drop() //Elimina la coleccion prueba

//Le asigno a la variable persona el documento de la coleccione personas que tenga como nombre Juan
var persona = db.personas.findOne({"nombre":"Juan"})

//A esta variable le agrego un campo persona compuesto por los valores de amigos y enemigos
persona.relaciones ={"amigos":persona.amigos, "enemigos":persona.enemigos}
persona.PrimerNombre = persona.nombre

//Le borro la estructura original
delete persona.amigos
delete persona.enemigos
delete persona.nombre

//El metodo update toma 2 parametros para hcer la modificacion, el primero es una condicion de busqueda que va a ubicar el documento y el segundo es el conjunto de cambios a realizar
//Reemplazo el documento cuyo nombre es Juan por la variable persona, resultando un documento con otra estuctura
db.personas.update({"nombre":"Juan"},persona)

