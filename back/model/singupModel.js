const sequelize = require('../db/conexion');

module.exports = class singupModel {
    constructor(singup){
        this.singup = singup;
    }

    async add (customer){
        let newCustomer = [
            customer.email,
            customer.password,
            customer.name,
            customer.last_name,
            customer.billing_address,
            customer.country,
            customer.state,
            customer.phone
        ]
        let result = await sequelize.query("SELECT * FROM customers WHERE email = '" + customer.email+ "'");
        if (result[0] == '') {
            try {
                let resultado = await sequelize.query(`INSERT INTO customers (email,[password],[name],last_name,billing_address,country,[state],phone) VALUES (?,?,?,?,?,?,?,?)`,
                {replacements: newCustomer, type: sequelize.QueryTypes.SELECT});
                console.log(resultado)
                return 'Alta de cliente exitosa!'
            }catch (error) {
                console.log(error)
                throw new Error ("Ocurrio un error al agregar el cliente");
            } 
        } else {
            return "El cliente ya existe!"
        }
        
    }
}