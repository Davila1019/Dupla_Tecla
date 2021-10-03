const productsModel = require('../model/productsModel');

module.exports.listProducts = async (category) => {
    let response = new productsModel();
    let result = await response.list(category);
    return result;
}

module.exports.getCart = async () => {
    let response = new productsModel();
    let result = await response.listCart();
    return result;
}

module.exports.findProduct = async (productId) => {
    let response = new productsModel();
    let result = await response.find(productId);
    return result;
}

module.exports.addProduct = async (product) => {
    let add = new productsModel();
    let data = await add.add(product);
    return data;
}

module.exports.deleteProduct = async (productId) => {
    let del = new productsModel();
    let data = await del.delete(productId);
    return data;
}

module.exports.addCart = async (product) => {
    let add = new productsModel();
    let data = await add.addCart(product);
    return data;
}

module.exports.delCart = async (productId) => {
    let del = new productsModel();
    let data = await del.deleteCart(productId);
    return data;
}

module.exports.updateProduct = async (product) => {
    let update = new productsModel();
    let data = await update.update(product);
    return data;
}
