const { DOUBLE } = require("sequelize/types");

let url = "https://api.mercadolibre.com/sites/MLM/search?category="   
//var categ;
//var y = 0;
    


    async function getItems(url){
        let res = await fetch(url);
        const data = await res.json();
        var item_M = data['results'];
        console.log(item_M);
        mostrarItems(item_M);
    }

    function mostrarItems(item_M){   
        let products = document.getElementById("products");
        products.innerHTML = ""
        for (let i = 0; i < item_M.length; i++) {
            var contenedor = document.createElement("div");
            contenedor.setAttribute("id", "p" + i);
            let producto = `
            <div class="card" style="width: 18rem; margin-top: 18px;">
                <img src="${item_M[i].image}" id=imagen class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item_M[i].name} </h5>
                    <h4 class="card-text">$ ${item_M[i].price}</h4>
                    <a id="button${i}" onclick="agregarProducto('${item_M[i].name}','${item_M[i].price}')" class="btn btn-primary"> <i class="fas fa-cart-plus"></i> Agregar Carrito</a>
                </div>
            </div>`;
            contenedor.innerHTML += producto
            products.appendChild(contenedor)
           // agregarProducto(categ[y].name,item_M[i].title,item_M[i].price,item_M[i].thumbnail);
        }
       // y++;

    }

    async function buscar(){
        let item = document.getElementById("item_search").value;
        let url = "https://api.mercadolibre.com/sites/MLM/search?q="+item;
        let res = await fetch(url);
        const data = await res.json();
        var item_M = data['results'];
        console.log(item_M);
        mostrarItems(item_M);
    }

    async function agregarProducto(name,price) {
        let precio = Number.parseFloat(price)
        let Articulo = {
            name: name,
            price: precio
        }
        console.log("Producto agregado")
        await fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(Articulo)
        });
        notification();

    }

    async function agregarProducto(name,price) {
        let precio = Number.parseFloat(price)
        let Articulo = {
            name: name,
            price: precio
        }
        console.log("Producto agregado")
        await fetch('http://localhost:3000/products/cart', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(Articulo)
        });
        notification();

    }

    function notification(){
      let toast_e = document.getElementById("liveToast");
      var toast = new bootstrap.Toast(toast_e)
      toast.show()
    }

    async function getProducts(category){
        console.log(localStorage.getItem('token'))
        let res =await fetch("http://localhost:3000/products/"+category, {
            headers: {
              'Authorization': 'Bearer' +localStorage.getItem('token'),

            },
        });
        let data = await res.json();
        let products = data[0]
        mostrarItems(products)
        console.log(data[0]);

    }

console.log(localStorage.getItem('token'));

//getItems(url+"MLM1747")

