const productController = require('../controller/productsController')


module.exports = async (app) => {
    app.get('/products/:category', async(req,res) => {
        let category = req.params.category;
        res.send(await productController.listProducts(category));
    });

    app.get('/products/:id',async(req,res) => {
        let productId = req.params.id
        res.send(await productController.findProduct(productId));
    });

    app.post('/products' ,async(req,res) => {
        let product = req.body;
        res.send(await productController.addProduct(product));
    });

    app.get('/products/del/:id',async(req,res) => {
        let productId = req.params.id
        await productController.deleteProduct(productId);
        let bd = await productController.allProducts();
        let data = bd[0];
        res.render('index',{data})
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
    app.get('/products',async(req,res) => {
        let bd = await productController.allProducts();
        let data = bd[0];
        res.render('index',{data});
    })
    app.get('/create',async(req,res) => {
        res.render('create');
    })

    app.get('/edit/:id',async(req,res) => {
        let data = req.params.id;
        res.render('edit',{data});
    })
};


