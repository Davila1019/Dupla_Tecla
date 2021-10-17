const sequelize = require('../db/conexion');

module.exports = class loginadminModel {
    constructor(loginadmin){
        this.loginadmin = loginadmin;
    }

    async find (admin){
       
        let result = await sequelize.query("SELECT email,[names] FROM admin_users WHERE email = '" + admin.email+"' AND [password] = '"+admin.password+"'");
        if (result[0].length > 0) {
            if (admin.email == result[0][0].email) {
                return result[0][0];
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}