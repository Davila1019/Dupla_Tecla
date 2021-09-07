async function getCart() {
    const result = await fetch('http://localhost:3000/carrito');
    const cart = await result.json();
    console.log(cart);
    mostrarCart(cart);
}

function mostrarCart(cart){   
        let products = document.getElementById("articles");
        for (let i = 0; i < cart.length; i++) {
            var contenedor = document.createElement("div");
            let producto = `<li class="list-group-item">${cart[i].id}</li>`;
            contenedor.innerHTML += producto
            products.appendChild(contenedor)
        }
    }

getCart()
