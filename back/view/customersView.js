const customerController = require('../controller/customersController')
const autentication = require('../middlewares/autentication')

module.exports = async (app) => {
    app.get('/customers',autentication.adminAutentication,async(req,res) => {
        let bd = await customerController.listCustomers();
        let data = bd[0];
        console.log(data)
        res.render('users',{data})
    });

    app.get('/customers/:id',autentication.adminAutentication,async(req,res) => {
        let customerId = req.params.id
        res.send(await productController.findCustomer(customerId));
    });

    app.post('/customer',autentication.adminAutentication,async(req,res) => {
        let customer = req.body;
        res.send(await customerController.addCustomer(customer));
        res.render('addUser')
    });
    app.post('/costumer/update',autentication.adminAutentication,async(req,res) => {
        let customer = req.body;
        res.send(await customerController.updateCustomer(customer));
    });

    app.get('/customers/del/:id',autentication.adminAutentication,async(req,res) => {
        let customerId = req.params.id
        await customerController.deleteCustomer(customerId);
        let bd = await customerController.listCustomers();
        let data = bd[0];
        res.render('users',{data})
    });
    
    app.get('/add/customer',autentication.adminAutentication,async(req,res) => {
        res.render('addUser');
    });

    app.get('/customer/:id',autentication.adminAutentication,async(req,res) => {
        let data = req.params.id;
        res.render('edituser',{data});
    })
};