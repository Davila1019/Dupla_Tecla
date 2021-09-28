const jwt = require('jsonwebtoken');
const logincustomModel = require("../model/logincustomModel")

    module.exports.logincustom = async (customer) => {
        let login = new logincustomModel();
        let data = await login.find(customer);
        if(data){
            let token = jwt.sign({data},process.env.KEY_CUSTOMERS) // se agrega el usiario en corchetes para hacerlo como objeto
            console.log(token);
            return token;
        } else{
            return "Cliente no autenticado"
        }
        
    }