const productsModel = require('../model/productsModel');

module.exports.listProducts = async () => {
    let response = new productsModel();
    let result = await response.list();
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