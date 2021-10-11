const customersModel = require('../model/customersModel');

module.exports.listCustomers = async () => {
    let response = new customersModel();
    let result = await response.list();
    return result;
}

module.exports.findCustomer = async (customerId) => {
    let response = new customersModel();
    let result = await response.find(customerId);
    return result;
}

module.exports.addCustomer = async (customer) => {
    let add = new customersModel();
    let data = await add.add(customer);
    return data;
}

module.exports.deleteCustomer = async (customerId) => {
    let del = new customersModel();
    let data = await del.delete(customerId);
    return data;
}

module.exports.updateCustomer = async (customer) => {
    let del = new customersModel();
    let data = await del.update(customer);
    return data;
}