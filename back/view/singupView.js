const singupController = require('../controller/singupController')

module.exports = async (app) => {
    app.post('/singup',async(req,res) => {
        let user = req.body;
        res.send( await singupController.singup(user));
    });
};