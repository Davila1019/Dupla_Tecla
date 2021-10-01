async function singup() {
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    let billing_address = document.getElementById("address").value;
    let country = document.getElementById("country").value;
    let state = document.getElementById("state").value;
    let phone = document.getElementById("phone").value;

    let singup = {
        email: email,
        password: password,
        name: name,
        last_name: last_name,
        billing_address: billing_address,
        country: country,
        state: state,
        phone: phone
    }

    let response = await fetch('http://localhost:3000/singup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(singup)
    });
    /*let token = response;
    console.log(token);
    if(token != undefined){
        console.log(token);
        localStorage.setItem("token",token);
    }*/

}