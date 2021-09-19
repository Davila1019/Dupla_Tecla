const sequelize = require('../db/conexion');

module.exports = class productsModel {
    constructor(product){
        this.product = product;
    }
    async list (){
        let result = await sequelize.query("SELECT * FROM products");
        return result;
    }
    async find (productId){
        let result = await sequelize.query("SELECT * FROM products WHERE id = " + productId);
        if(result[0] != ''){
            result = await sequelize.query("SELECT * FROM products WHERE id = " + productId);
            return result;
        }else{
            return "No en existencia!"
        }
    }

    //Teminar de realizar la insercion a la base de datos basandose en el query de insercion de productos del gestor de base de datos
    async add (product){
        let newProduct = [
            product.name,
            product.state,
            product.price,
            product.id_mercado
        ]
        console.log(newProduct)
        try {
            let resultado = await sequelize.query(`INSERT INTO products ([name], [state], price ,id_mercado) VALUES (?,?,?,?)`,
            {replacements: newProduct, type: sequelize.QueryTypes.SELECT});
            console.log(resultado)
            return 'Alta de producto exitosa!'
        }catch (error) {
            console.log(error)
            throw new Error ("Ocurrio un error al crear el nuevo libro");
        }
    }

    async delete (productId){
        let result = await sequelize.query("SELECT * FROM products WHERE id = " + productId);
        if(result[0] != ''){
            result = await sequelize.query("DELETE FROM products WHERE id = " + productId);
            return "Exito en la baja del producto";
        }else{
            return "El producto no existe!"
        }
        
    }

}