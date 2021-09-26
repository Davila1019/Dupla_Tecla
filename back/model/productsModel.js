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

    
    async add (product){
        let newProduct = [
            product.category,
            product.name,
            product.price,
            product.image
        ]
        console.log(newProduct)
            try {
                let resultado = await sequelize.query(`INSERT INTO products(category,[name],price,[image]) VALUES (?,?,?,?)`,
                {replacements: newProduct, type: sequelize.QueryTypes.SELECT});
                console.log(resultado)
                return 'Alta de producto exitosa!'
            }catch (error) {
                console.log(error)
                throw new Error ("Ocurrio un error al crear el nuevo");
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