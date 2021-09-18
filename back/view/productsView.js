const productController = require('../controller/productsController')

module.exports = async (app) => {
    app.get('/products',async(req,res) => {
        res.send(await productController.listProducts());
    });

    app.get('/product/:id',async(req,res) => {
        let productId = req.params.id
        res.send(await productController.findProduct(productId));
    });
};