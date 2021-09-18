    /*async function getCart() {
        const result = await fetch('http://localhost:3000/carrito');
        const cart = await result.json();
        console.log(cart);
        mostrarCart(cart);
    }

    function mostrarCart(cart){   
        let products = document.getElementById("table_cart");
        for (let i = 0; i < cart.length; i++) {
            var contenedor = document.createElement("tr");
            let producto = `<tr>
            <th scope="row">${cart[i].id}</th>
            <td>${cart[i].nombre}</td>
            <td>${cart[i].cantidad}</td>
            <td>${cart[i].precio}</td>
            <a id="button${i}" onclick="borrarProducto('${cart[i].id}')" class="btn btn-secondary"> <i class="fas fa-cart-plus"></i> Agregar Carrito</a>
            </tr>`;
            contenedor.innerHTML += producto
            products.appendChild(contenedor)
        }
        
    }

    async function borrarProducto(id) {
        let url = 'http://localhost:3000/carrito/'+id
        await fetch(url, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
           
        });
     
    }

getCart()*/
