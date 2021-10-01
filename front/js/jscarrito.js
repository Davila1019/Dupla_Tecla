    async function getCart() {
        const result = await fetch('http://localhost:3000/cart');
        const cart = await result.json();
        const carrito = cart[0];
        console.log(carrito);
        mostrarCart(carrito);
    }



    function mostrarCart(cart){   
        let products = document.getElementById("table_cart");
        for (let i = 0; i < cart.length; i++) {
            var contenedor = document.createElement("tr");
            let producto = `<tr>
            <th scope="row">${cart[i].id}</th>
            <td>${cart[i].name}</td>
            <td>1</td>
            <td>${cart[i].price}</td>
            <a id="button${i}" onclick="borrarProducto('${cart[i].id}')" type="button"> Eliminar</a>
            </tr>`;
            contenedor.innerHTML += producto
            products.appendChild(contenedor)
        }
        
    }

    async function borrarProducto(id) {
        let url = 'http://localhost:3000/cart/'+id
        await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
        });
        notification();
     
    }

    function notification(){
        let toast_e = document.getElementById("liveToast");
        var toast = new bootstrap.Toast(toast_e)
        toast.show()
      }

getCart()
