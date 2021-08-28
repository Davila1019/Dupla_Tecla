    async function getOfertas(){
        let url = " https://api.mercadolibre.com/seller-promotions/promotions/LGH-MLM1000/items?promotion_type=LIGHTNING"
        let res = await fetch(url);
        const data = await res.json();
      
        console.log(data);
    
    }


    async function getItems(){
        let url = "https://api.mercadolibre.com/sites/MLM/search?category=MLM1747"
        let res = await fetch(url);
        const data = await res.json();
        var item_M = data['results'];
        console.log(item_M);
        mostrarItems(item_M);
    }
    function mostrarItems(item_M){  
        let products = document.getElementById("products");
        for (let i = 0; i < item_M.length; i++) {
            var contenedor = document.createElement("div");
            contenedor.setAttribute("id", "p" + i);
            let producto = `
            <div class="card" style="width: 18rem; margin-top: 20px;">
                <img src="${item_M[i].thumbnail}" class="card-img-top" alt="...">
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

getItems()
getOfertas()
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