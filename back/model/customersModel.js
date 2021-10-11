const sequelize = require('../db/conexion');

module.exports = class customersModel {
    constructor(customer){
        this.customer = customer;
    }
    async list (){
        let result = await sequelize.query("SELECT * FROM customers");
        return result;
    }
    async find (customerId){
        let result = await sequelize.query("SELECT * FROM customers WHERE id = " + customerId);
        if(result[0] != ''){
            result = await sequelize.query("SELECT * FROM customers WHERE id = " + customerId);
            return result;
        }else{
            return "No en existencia!"
        }
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
        console.log(newCustomer)
        let result = await sequelize.query("SELECT * FROM customers WHERE email = '" + customer.email+ "'");
        if (result[0] == '') {
            try {
                let resultado = await sequelize.query(`INSERT INTO customers(email,[password],[name],last_name,billing_address,country,[state],phone) VALUES (?,?,?,?,?,?,?,?)`,
                {replacements: newCustomer, type: sequelize.QueryTypes.SELECT});
                console.log(resultado)
                return 'Alta de cliente exitosa!'
            }catch (error) {
                console.log(error)
                throw new Error ("Ocurrio un error al crear el nuevo");
            }
        }else{
            return "El cliente ya existe!"
        }
    }

    async delete (customerId){
        let result = await sequelize.query("SELECT * FROM customers WHERE id = " + customerId);
        if(result[0] != ''){
            result = await sequelize.query("DELETE FROM customers WHERE id = " + customerId);
            return "Exito en la baja del cliente";
        }else{
            return "El customero no existe!"
        }
        
    }

    async update (customer){
        let result = await sequelize.query("SELECT * FROM customers WHERE id= '" + customer.id+ "'");
        console.log(result)
        if(result[0] != ''){
            result = await sequelize.query("UPDATE customers SET password= '"+customer.password+"', name= '"+customer.name+"' WHERE id= '" + customer.id+"'");
            console.log(result)
            return "Exito al actualizar";
        }else{
            return "El customero no existe!"
        }
    }

}