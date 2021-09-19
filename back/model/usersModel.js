const sequelize = require('../db/conexion');

module.exports = class usersModel {
    constructor(user){
        this.user = user;
    }
    async list (){
        let result = await sequelize.query("SELECT * FROM users");
        return result;
    }
    async find (userId){
        let result = await sequelize.query("SELECT * FROM users WHERE id = " + userId);
        if(result[0] != ''){
            result = await sequelize.query("SELECT * FROM users WHERE id = " + userId);
            return result;
        }else{
            return "No existe el usuario!"
        }
    }

    //Teminar de realizar la insercion a la base de datos basandose en el query de insercion de productos del gestor de base de datos
    async add (user){
        let newUser = [
            user.user,
            user.password,
            user.email,
            user.name
        ]
        console.log(newUser)
        try {
            let resultado = await sequelize.query(`INSERT INTO users ([user],[password],email,[name]) VALUES (?,?,?,?)`,
            {replacements: newUser, type: sequelize.QueryTypes.SELECT});
            console.log(resultado)
            return 'Alta de usuario exitosa!'
        }catch (error) {
            console.log(error)
            throw new Error ("Ocurrio un error al agregar el usuario");
        }
    }

    async delete (userId){
        let result = await sequelize.query("SELECT * FROM users WHERE id = " + userId);
        if(result[0] != ''){
            result = await sequelize.query("DELETE FROM users WHERE id = " + userId);
            return "Exito en la baja del usuario";
        }else{
            return "El usuario no existe!"
        }
        
    }

}