'use strict'
const express = require('express');
require('dotenv').config();
var bodyParser = require('body-parser');

// Crear el servidor de express
const app = express();

// Lectura y parseo del body
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Rutas
app.use('/', require('./routes/human') );
app.use('/', require('./routes/morse') );

// Escuchar peticiones
app.listen( 3400, () => {
    console.log(`Servidor corriendo en puerto ${ 3400 }`);
});






