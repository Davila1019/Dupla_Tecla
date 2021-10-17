const jwt = require('jsonwebtoken');
const loginadminModel = require("../model/loginadminModel")

    module.exports.loginAdmin = async (admin) => {
        let login = new loginadminModel();
        
        let data = await login.find(admin);
        if(data){
            let token = jwt.sign({data},process.env.KEY_ADMIN) // se agrega el usiario en corchetes para hacerlo como objeto
            console.log(token);
            return token;
        } else{
            return "Administrador no autenticado"
        }
        
    }