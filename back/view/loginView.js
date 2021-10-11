const loginController = require('../controller/loginController')

module.exports = async (app) => {
    app.post('/login',async(req,res) => {
        let user = req.body;
        const token = await loginController.login(user);
        
        const cookieOptions = {
            expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
            httpOnly: true
        }
        res.cookie('jwt',token,cookieOptions) 
        res.send(token);
    });
};