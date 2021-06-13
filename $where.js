db.comida.insert({"manzana":1,"platano":4,"melocoton":3})
db.comida.insert({"manzana":8,"platano":4,"melon":4})

//$where
db.comida.find({"$where":
    function(){
        for(var a in this){
            for(var b in this){
                if(a!=b && this[a] == this[b]){
                    return true;
                    }
                    }
                }
                return false;
        }
    })