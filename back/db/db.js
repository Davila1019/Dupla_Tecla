let Carrito = [];
let aux = [];
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
    
    Carrito.push(new Product(id,nombre,cantidad,precio));
    Id.cont++
    console.log(Carrito)
    limpiarArreglo();
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

const limpiarArreglo = function ( ) {
    for (var ib = 0; ib <= Carrito.length; ib++) {
        for (var j = 1; j < Carrito.length; j++) {
          if (ib != j) {
            if (Carrito[id] == Carrito[id]) {
              Carrito[ib].cantidad = Carrito[ib].cantidad + Carrito[j].cantidad; 
              
            }
          }
        }
      }
}



module.exports = {Carrito,searchProduct,respuesta,addProduct,deleteProduct}

