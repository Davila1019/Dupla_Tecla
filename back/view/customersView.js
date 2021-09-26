const customerController = require('../controller/customersController')

module.exports = async (app) => {
    app.get('/customers',async(req,res) => {
        res.send(await customerController.listCustomers());
    });

    app.get('/customers/:id',async(req,res) => {
        let customerId = req.params.id
        res.send(await productController.findCustomer(customerId));
    });

    app.post('/customers',async(req,res) => {
        let customer = req.body;
        res.send(await customerController.addCustomer(customer));
    });

    app.get('/customers/del/:id',async(req,res) => {
        let customerId = req.params.id
        res.send(await customerController.deleteCustomer(customerId));
    });
    
};