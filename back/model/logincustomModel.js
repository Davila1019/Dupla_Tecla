const sequelize = require('../db/conexion');

module.exports = class logincustomModel {
    constructor(logincustom){
        this.logincustom = logincustom;
    }

    async find (customer){
       
        let result = await sequelize.query("SELECT email,name FROM customers WHERE email = '" + customer.email+"' AND [password] = '"+customer.password+"'");
        if (result[0].length > 0) {
            if (customer.email == result[0][0].email) {
                return result[0][0];
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}