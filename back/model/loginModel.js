const sequelize = require('../db/conexion');

module.exports = class loginModel {
    constructor(login){
        this.login = login;
    }

    async find (user){
       
        let result = await sequelize.query("SELECT [user],email,name FROM users WHERE [user] = '" + user.user+"' AND [password] = '"+user.password+"'");
        
        if(result[0].length > 0){
        
            return result[0][0];
        
        }else{
            return false;
        }
    }
}