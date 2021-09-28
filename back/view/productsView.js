const productController = require('../controller/productsController')
const autentication = require('../middlewares/autentication')

module.exports = async (app) => {
    app.get('/products',autentication.userAutentication, async(req,res) => {
        res.send(await productController.listProducts());
    });

    app.get('/products/:id',autentication.userAutentication,async(req,res) => {
        let productId = req.params.id
        res.send(await productController.findProduct(productId));
    });

    app.post('/products',autentication.userAutentication ,async(req,res) => {
        let product = req.body;
        res.send(await productController.addProduct(product));
    });

    app.get('/products/del/:id',autentication.userAutentication,async(req,res) => {
        let productId = req.params.id
        res.send(await productController.deleteProduct(productId));
    });
    
};