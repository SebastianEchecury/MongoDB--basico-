//Devuelve la cantidad de documentos que tienen item abc
db.ventas.count({"item":"abc"})


//distinct recibe un campo y una query. Devuelve el numero de documentos diferentes segun el campo que indiquemos de los documentos que cumplan
//la condicion de busqueda

//Me devuelve un arreglo con los distintos items
db.ventas.distinct("item")

//Me devuelve un arreglo con los distintos items que su precio sea 10
db.ventas.distinct("item",{"precio":10})



//$group
db.ventas.aggregate(
    [{
            $group:{
                    _id:{
                        mes: {$month:"$fecha"},
                        dia: {$dayOfMonth:"$fecha"},
                        año: {$year:"$fecha"}
                        },
                    precioTotal: {$sum:{$multiply:["$precio","$cantidad"]}},
                    cantidadMedia: {$avg:"$cantidad"},
                    cantidad: {$sum:1}
            }
    }]
)