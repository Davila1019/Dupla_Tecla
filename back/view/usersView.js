const userController = require('../controller/usersController')

module.exports = async (app) => {
    app.get('/users',async(req,res) => {
        res.send(await userController.listUsers());
    });

    app.get('/users/:id',async(req,res) => {
        let userId = req.params.id
        res.send(await userController.findUser(userId));
    });

    app.post('/users',async(req,res) => {
        let user = req.body;
        res.send(await userController.addUser(user));
    });

    app.get('/users/del/:id',async(req,res) => {
        let userId = req.params.id;
        res.send(await userController.deleteUser(userId));
    });

    app.get('/user/update',async(req,res) => {
        let user = req.body;
        res.send(await userController.updateUser(user));
    });
    
};