const productController = require('../controller/productsController')
const autentication = require('../middlewares/autentication')

module.exports = async (app) => {
    app.get('/products/:category',autentication.userAutentication, async(req,res) => {
        let category = req.params.category;
        res.send(await productController.listProducts(category));
    });

    app.get('/products/:id',autentication.userAutentication,async(req,res) => {
        let productId = req.params.id
        res.send(await productController.findProduct(productId));
    });

    app.post('/products' ,async(req,res) => {
        let product = req.body;
        res.send(await productController.addProduct(product));
    });

    app.get('/products/del/:id',async(req,res) => {
        let productId = req.params.id
        res.send(await productController.deleteProduct(productId));
    });

    app.post('/products/cart',async(req,res) => {
        let product = req.body;
        res.send(await productController.addCart(product));
    });

    app.post('/product/update',async(req,res) => {
        let product = req.body;
        res.send(await productController.updateProduct(product));
    });

    app.get('/cart',async(req,res) => {
        res.send(await productController.getCart());
    });

    app.post('/cart/:id',async(req,res) => {
        let productId = req.params.id;
        res.send(await productController.delCart(productId));
    });
    
};


