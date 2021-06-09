//con $slice limito la cantidad de elementos ingresados, con el -3 solo ingresan los 3 ultimos
db.peliculas.update({"genero":"accion"},
{"$push":{"top10":{"$each":[
    {"nombre":"Avatar"},
    {"nombre":"Guerra de las galaxias"},
    {"nombre":"Ready player one"},
    {"nombre":"Gladiador"},
    {"nombre":"El faro"}],"$slice":-3}}})
    

//con $sort los ordeno de acuerdo a algun campo, con -1 es descendente, 1 ascendente    
db.peliculas.update({"genero":"accion"},
{"$push":{"top10":{"$each":[
    {"nombre":"Avatar", "valoracion":2},
    {"nombre":"Guerra de las galaxias", "valoracion":4},
    {"nombre":"Ready player one", "valoracion":5},
    {"nombre":"Gladiador", "valoracion": 3},
    {"nombre":"El faro", "valoracion":3}],"$slice":5,"$sort":{"valoracion":-1}}}})