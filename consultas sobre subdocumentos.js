//Consulta sobre documentos embebidos
db.alumnos.find({"datos-personales":{"nombre":"Pedro","apellido":"Ramirez","edad":22}})
//Con el . indico el campo dentro del subdocumento
db.alumnos.find({"datos-personales.nombre":"Luisa"})