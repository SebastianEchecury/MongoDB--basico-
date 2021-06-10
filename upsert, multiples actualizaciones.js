//El upsert es un parámetro que paso al hacer un update, lo que hace es que si no encuentra un documento que coincida con nuestra condicion, 
//creara el documento, si lo encuentra hara la modificacion normal (debe estar en true, si no no hara nada).
db.personas.update({"nombre":"Marco"}, {"$set":{"apellido":"Ruben"}}, true);

//Para hacer multiples actualizaciones cuando hago un update hay que agregar un parametro luego del upsert, puede tomar los valores true o false. 
//Si esta en true actualiza todos los documentos que cumplan con la condición. 
//Dependiendo del upsert lo creara si no existe. Si estuviera en false actualiza solo 1.
db.personas.update({"nombre":"Juan"}, {"$set":{"apellido":"Lopez"}}, true, true);