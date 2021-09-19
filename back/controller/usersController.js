const usersModel = require('../model/usersModel');

module.exports.listUsers = async () => {
    let response = new usersModel();
    let result = await response.list();
    return result;
}

module.exports.findUser = async (userId) => {
    let response = new usersModel();
    let result = await response.find(userId);
    return result;
}

module.exports.addUser = async (user) => {
    let add = new usersModel();
    let data = await add.add(user);
    return data;
}

module.exports.deleteUser = async (userId) => {
    let del = new usersModel();
    let data = await del.delete(userId);
    return data;
}