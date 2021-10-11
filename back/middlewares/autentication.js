const {promisify} = require('util');
const jwt = require('jsonwebtoken');
const loginModel = require("../model/loginModel")

module.exports.userAutentication = function(req,res,next){
    
    if(req.cookies.jwt){
        try{
             const decodificada =  promisify(jwt.verify)(req.cookies.jwt, process.env.KEY)
             const data = decodificada.result[0];
            
            let result = await loginModel.find({user:data.user}).exec();
            if(!result){
                return "Usuario no autenticado"
                
            }
            else{
                
                if(data.password == result[0].password){
                    req.user = data
                    return next()
                }
                else{
                    return "Usuario no autenticado"
                }
            }
            


            // const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.KEY)
            // const data = decodificada.data;
            // let result = await sequelize.query("SELECT [name],username FROM users WHERE username ='"+ data.username+"'");
            
            // if(result){
            //     req.user = data
            //     return next()
            // }
            
                
            
            
        }
        catch(error){
            console.log(error)
            res.redirect('/login')
        }
    }
    else{
        res.redirect('/login')
    }
    
}