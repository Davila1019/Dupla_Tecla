let url = "https://api.mercadolibre.com/sites/MLM/search?category="   
let inicio = "MLM1747"
    async function getCategorias(){
        let url = "https://api.mercadolibre.com/categories/MLM1747"
        let res = await fetch(url);
        const data = await res.json();
        var categories_m = data['children_categories'];
        console.log(categories_m);
        mostrarCategorias(categories_m);
    }


    async function getItems(url){
        let res = await fetch(url);
        const data = await res.json();
        var item_M = data['results'];
        console.log(item_M);
        mostrarItems(item_M);
    }

    function showItems(item_M){   
        let products = document.getElementById("products");
        products.innerHTML = ""
        for (let i = 0; i < item_M.length; i++) {
            var contenedor = document.createElement("div");
            contenedor.setAttribute("id", "p" + i);
            let producto = `
            <div class="card" style="width: 18rem; margin-top: 18px;">
                <img src="${item_M[i].thumbnail}" id=imagen class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item_M[i].title}</h5>
                    <p class="card-text">${item_M[i].address.state_name}.</p>
                    <h4 class="card-text">$ ${item_M[i].price}</h4>
                    <a href="#" id="button${i} " class="btn btn-primary"> <i class="fas fa-cart-plus"></i> Agregar Carrito</a>
                </div>
            </div>`;
            contenedor.innerHTML += producto
            products.appendChild(contenedor)
        }

    }

     async function showCategorias(categories_m){
        let menu = document.getElementById("menu");
        for (let i = 0; i < categories_m.length; i++) {
            
            var contenedor = document.createElement("li");
            let item = `<li> <a class="dropdown-item" onclick="getItems('${url+categories_m[i].id}')">${categories_m[i].name}</a></li>`;

            console.log(url+categories_m[i].id)
            contenedor.innerHTML = item;
            menu.appendChild(contenedor);
            
        }
    }

getCategorias()
getItems(url+inicio)


class CarShop{

    constructor(nombre){
        this.nombre =nombre;
        this.articles =[];
        this.total = 0;
        this.pagado = false;
    }

    addProduct(article){
        
        this.articles.push(articl);
        carrito.push(evento.target.getAttribute())
        alert("Articulo agregado :) !")
        
    }

    deleteProduct(article){
        var removeItemFromArr = ( article ) => {
            var i = this.articles.indexOf( article );
            i !== -1 && this.articles.splice( i, 1 );
        };
    }

    getTotal(){
        var total = 0;
        for (let i = 0; i < this.articles.length; i++) {
            const articlesInCart = this.articles.array[i];
            var total =+ articlesInCart[i];
        }
        this.total = total;
    }

}

car = new CarShop();