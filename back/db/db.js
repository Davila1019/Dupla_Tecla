let Carrito = {};
let Id = {
    cont: 0
}
let respuesta = {
    codigo: 200,
    error: false,
    mensaje:''
}


class Product{

    constructor(id,nombre,cantidad,precio){
        this.id = id
        this.nombre = nombre
        this.cantidad = cantidad
        this.precio = precio
        this.Id = Id.cont
    }

}

const addProduct = function(id,nombre,cantidad,precio){
    
    Carrito[id] = new Product(id,nombre,cantidad,precio);
    Id.cont++
    console.log(Carrito)
}

const deleteProduct = function(id){
    if(Carrito.hasOwnProperty(id)){
        console.log(Carrito[id]);
    if (Carrito[id].cantidad  > 1) {
        Carrito[id].cantidad  = Carrito[id].cantidad  - 1;
        return true
    } else {
        delete Carrito[id]
        return true
     } 
    }
    else{
      return false
    }
}

const searchProduct = function (id) {
    if(Carrito.hasOwnProperty(id)){
        Carrito[id].cantidad++;
        return true;
    }else{
        return false;
    } 
}

const getTotal = function(){
    var total = 0;
    for (let i = 0; i < this.articles.length; i++) {
        const articlesInCart = this.articles.array[i];
        var total =+ articlesInCart[i];
    }
    this.total = total;
}

module.exports = {Carrito,searchProduct,respuesta,addProduct,deleteProduct,getTotal}

