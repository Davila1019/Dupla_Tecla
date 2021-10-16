async function login() {
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let login = {
        email: email,
        password: password
    }

    let res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(login)
    });
    
    let token = await res.text();
    console.log(token);
    if(token == 'Usuario no autenticado' || token == undefined){
        alert('Usuario o contraseña invalidos')
        
    }else{
        console.log(token);
        localStorage.setItem("token",token);
        window.location="../html/index.html";
    }

}