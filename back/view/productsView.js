const productController = require('../controller/productsController')

module.exports = async (app) => {
    app.get('/products',async(req,res) => {
        res.send(await productController.listProducts());
    });

    app.get('/products/:id',async(req,res) => {
        let productId = req.params.id
        res.send(await productController.findProduct(productId));
    });

    app.post('/products',async(req,res) => {
        let product = req.body;
        res.send(await productController.addProduct(product));
    });

    app.get('/products/del/:id',async(req,res) => {
        let productId = req.params.id
        res.send(await productController.deleteProduct(productId));
    });
    
};