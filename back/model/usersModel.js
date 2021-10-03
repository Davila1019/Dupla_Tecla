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

    
    async add (user){
        let newUser = [
            user.email,
            user.password,
            user.name,
            user.last_name,
            user.phone
        ]
        let result = await sequelize.query("SELECT * FROM users WHERE email = '" + user.email+ "'");
        if (result[0] == '') {
            try {
                let resultado = await sequelize.query(`INSERT INTO users (email,[password],[name],last_name,phone) VALUES (?,?,?,?,?)`,
                {replacements: newUser, type: sequelize.QueryTypes.SELECT});
                console.log(resultado)
                return 'Alta de usuario exitosa!'
            }catch (error) {
                console.log(error)
                throw new Error ("Ocurrio un error al agregar el usuario");
            } 
        } else {
            return "El usuario ya existe!"
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

    async update (user){
        let result = await sequelize.query("SELECT * FROM users WHERE email= '" + user.email+ "'");
        if(result[0] != ''){
            result = await sequelize.query("UPDATE users SET [password]= '"+user.password+"' WHERE email= '" + user.email+"'");
            return "Exito de consulta del usuario";
        }else{
            return "El usuario no existe!"
        }
    }

}