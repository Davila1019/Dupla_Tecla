const logincustomController = require('../controller/logincustomController')

module.exports = async (app) => {
    app.post('/loginCustomers',async(req,res) => {
        let user = req.body;
        res.send( await logincustomController.logincustom(user));
    });
};