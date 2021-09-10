const express = require("express");
const dotenv = require('dotenv');
const db = require('./db/db');
const midd = require('./middlewares/midd');
const cors = require('cors')
const app = express();

dotenv.config();





//Middlelware
app.use(express.json());
app.use(cors());
app.use(midd.log);
app.use(midd.limitador);


app.listen(process.env.PORT, function () {
    console.log(`Servidor iniciado en ${process.env.HOST}:${process.env.PORT}`)
});



app.get('/carrito',function (req, res) {
    res.send(db.Carrito)
})

app.post('/carrito',midd.Autenticar, function (req, res) {
    if (!req.body.id || !req.body.nombre || !req.body.cantidad || !req.body.precio) {
        db.respuesta = {
            codigo: 502,
            error: true,
            mensaje: 'Es indispensable enviar todos los datos'
        }
    } else {
        if (db.searchProduct(req.body.id)) {
            db.respuesta = {
                codigo: 200,
                error: false,
                mensaje: 'Producto añadido'
                
            }
        } else {
            db.addProduct(req.body.id, req.body.nombre,req.body.cantidad,req.body.precio)
            db.respuesta = {
                codigo: 200,
                error: false,
                mensaje: 'Producto Agregado'
            }
        }
    }
    res.send(db.respuesta)
})

app.delete('/carrito/:id', function (req, res) {

    if (!db.deleteProduct(req.params.id)) {
        db.respuesta = {
            codigo: 200,
            error: false,
            mensaje: 'Producto eliminado'
        }
    } else {
        db.respuesta = {
            codigo: 400,
            error: false,
            mensaje: 'Producto no existe'
        }
    }
    res.send(db.respuesta);
})
