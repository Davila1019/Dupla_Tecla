//const productsModel = require('../model/productsModel');
const jwt = require('jsonwebtoken');
const loginModel = require("../model/loginModel")

    module.exports.login = async (user) => {
        let login = new loginModel();
        let data= await login.find(user);
        if(data){
            let token = jwt.sign({data},process.env.KEY ,{
                expiresIn: process.env.JWT_TIEMPO_EXPIRA
            }) 
            return token;
        } else{
            return "Usuario no autenticado"
        }
        
    }