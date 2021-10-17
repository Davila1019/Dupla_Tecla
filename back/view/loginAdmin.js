const loginAdminController = require('../controller/loginAdminController')
const productController = require('../controller/productsController')
module.exports = async (app) => {
    app.post('/loginAdmin',async(req,res) => {
        let user = req.body;
        let token = await loginAdminController.loginAdmin(user);
        if(token != "Administrador no autenticado"){
            const cookieOptions = {
                expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                httpOnly: true
            }
            res.cookie('jwt',token,cookieOptions) 
            let bd = await productController.allProducts();
            let data = bd[0];
            res.render('index',{data})
            //console.log('aqui estoy')
        }
      
    });
};