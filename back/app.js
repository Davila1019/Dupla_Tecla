const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const sequileze = require('./db/conexion');
const productsView = require('./view/productsView');
const homeView = require('./view/homeView');
const loginView = require('./view/loginView');
const usersView = require('./view/usersView');
const customersView = require('./view/customersView');
const singupView = require("./view/singupView")
const logincustomView = require('./view/loginCustomers');
const midd = require('./middlewares/midd');
const cookieParser = require('cookie-parser')
const app = express();

app.use(express.json())
app.use(cors());

app.use(cookieParser())

app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');
app.set('views', __dirname + '/views');
console.log()
async function serverStart() {
    try {
        await sequileze.authenticate();
        console.log("Conexión estabilizada correctamente")
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`);
        });
    } catch (error) {
        console.error('No se pudo conectar correctamente con la Base de datos:', error);
    }
}

serverStart();

//Iniciamos vistas
productsView(app);
homeView(app);
loginView(app);
usersView(app);
customersView(app);
singupView(app);
logincustomView(app);