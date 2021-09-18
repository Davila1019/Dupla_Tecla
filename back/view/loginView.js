const loginController = require('../controller/loginController')

module.exports = async (app) => {
    app.post('/login',async(req,res) => {
        let user = req.body;
        //console.log(user);
        res.send(await loginController.login(user));
        
    });
};