//Metodo find. Puedo indicar todas las condiciones que quiera
db.personas.find({"edad":15, "nombre":"Juan"})
//Si no quiero que me traiga todos los datos del documento lo indico como un segundo parametro
db.personas.find({"edad":15, "nombre":"Juan"},{"edad":1, "nombre":1})
//También puedo indicar que campos no me tiene que traer poniendo el 0 en vez del 1
db.personas.find({"edad":15, "nombre":"Juan"},{"edad":0})


//Metodo findOne permite solo seleccionar 1 documento, a pesar de que pueda haber varios
//Si varios documentos cumplen con la condición traera el primero que encuentra


//Operadores condicionales
//Traigo los documentos que la edad sea >= 18 y <=30.
db.personas2.find({"edad":{"$gte":18,"$lte":30}})

//Primero asigno a fecha la fecha de hoy, luego traigo los documentos que el registro sea < fecha.
fecha = new Date("01/01/2015")
db.personas2.find({"registro":{"$lt":fecha}})

//Traigo los documentos que el nombre es distinto de Juan
db.personas2.find({"nombre":{"$ne":"Juan"}})


//Operadores logicos
//Traigo todos los que NO son != Juan
db.personas2.find({"nombre":{"$not":{"$ne":"Juan"}}})

//Traigo los documentos cuyo nombre empieza con J y la edad es 34
db.personas2.find({"$and":[{"nombre":/^J/},{"edad":34}]})

//Traigo los documentos cuyos nombres empiezan con J o su edad es menor a 30
db.personas2.find({"$or":[{"nombre":/^J/},{"edad":{"$lt":30}}]})