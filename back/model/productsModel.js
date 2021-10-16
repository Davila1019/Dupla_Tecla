const sequelize = require('../db/conexion');

module.exports = class productsModel {
    constructor(product){
        this.product = product;
    }

    async listCart (email){
        let result = await sequelize.query("SELECT * FROM carrito WHERE email_user = " +"'"+ email +"'");
        return result;
    }

    async list (category){
        let result = await sequelize.query("SELECT * FROM products WHERE category = " +"'"+ category +"'");
        return result;
    }

    async all (){
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

    async addCart (product){
        let newProduct = [
            product.name,
            product.price,
            product.email
        ]
        console.log(newProduct)
            try {
                let resultado = await sequelize.query(`INSERT INTO carrito ( [name], price, email_user ) VALUES (?,?,?)`,
                {replacements: newProduct, type: sequelize.QueryTypes.SELECT});
                console.log(resultado)
                return 'Alta de producto exitosa!'
            }catch (error) {
                console.log(error)
                throw new Error ("Ocurrio un error al crear el nuevo");
            }
    }

    async delete (productId){
        let result = await sequelize.query("SELECT * FROM products  WHERE id = " + productId);
        if(result[0] != ''){
            result = await sequelize.query("DELETE FROM products WHERE id = " + productId);
            return "Exito en la baja del producto";
        }else{
            return "El producto no existe!"
        }
        
    }

    async deleteCart (productId){
        let result = await sequelize.query("SELECT * FROM carrito  WHERE id = " + productId);
        if(result[0] != ''){
            result = await sequelize.query("DELETE FROM carrito WHERE id = " + productId);
            return "Exito en la baja del producto";
        }else{
            return "El producto no existe!"
        }
        
    }

    async update (product){
        let result = await sequelize.query("SELECT * FROM products WHERE id= '" + product.id+ "'");
        console.log(result)
        if(result[0] != ''){
            result = await sequelize.query("UPDATE products SET price= '"+product.price+"', name= '"+product.name+"' WHERE id= '" + product.id+"'");
            console.log(result)
            return "Exito al actualizar";
        }else{
            return "El producto no existe!"
        }
    }

}