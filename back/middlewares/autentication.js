const {promisify} = require('util');
const jwt = require('jsonwebtoken');
const loginModel = require("../model/loginModel")

module.exports.userAutentication = function(req,res,next){
    
    if (req.headers.authorization != undefined) {
        try {
            const token = req.headers.authorization.split(' ')[0];
            let result = jwt.verify(token,process.env.KEY);
            return next();
        } catch (error) {
            throw new Error("Token invalido");
        }
    } else {
        throw new Error("Token invalido");
    }
    
}

module.exports.adminAutentication = function(req,res,next){
    let token = req.cookies.jwt;
    console.log(token)
    if (req.cookies.jwt != undefined) {
        try {
            let result = jwt.verify(token,process.env.KEY_ADMIN);
            return next();
        } catch (error) {
            throw new Error("Token invalido");
        }
    } else {
        throw new Error("Token invalido");
    }
    
}