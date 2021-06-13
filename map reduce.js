db.ordenes.mapReduce(
    function(){emit(this.cliente_id,this.cantidad);},
    function(key, values){return Array.sum(values)},
    {
        query:{estado:"A"},
        out:"Totales_Pedidos"
    }
)
    
db.getCollection('Totales_Pedidos').find({})