async function getCart() {
    const result = await fetch('http://localhost:3000/carrito');
    const cart = await result.json();
    mostrarItems(cart);
    console.log(cart);  
}
function mostrarItems(cart){   
    let products = document.getElementById("products");
    for (let i = 0; i < cart.length; i++) {
        var contenedor = document.createElement("div");
        contenedor.setAttribute("id", "p" + i);
        let producto = `
        <div class="card" style="width: 18rem; margin-top: 18px;">
            <img src="" id=imagen class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text">.</p>
                <h4 class="card-text">$ </h4>
                
            </div>
        </div>`;
        contenedor.innerHTML += producto
        products.appendChild(contenedor)
    }

}

getCart()