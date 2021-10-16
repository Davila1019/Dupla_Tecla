    async function getCart() {
        let token = localStorage.getItem('token')
        let data = JSON.parse(atob(token.split('.')[1]));
        const result = await fetch('http://localhost:3000/cart/'+data.data.email,{
            method: 'GET',
            headers: {
              'authorization': token,
            },
        })
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
        let token = localStorage.getItem('token')
        let data = JSON.parse(atob(token.split('.')[1]));
        let url = 'http://localhost:3000/cart/'+id
        await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'authorization': token,
            },
        });
        notification();
     
    }

    function notification(){
        let toast_e = document.getElementById("liveToast");
        var toast = new bootstrap.Toast(toast_e);
        toast.show();
        location.reload();
      }

getCart()
