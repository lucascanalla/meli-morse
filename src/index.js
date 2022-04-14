'use strict'
const express = require('express');
require('dotenv').config();
var bodyParser = require('body-parser');

// Express server create
const app = express();

// Port
var port = process.env.PORT || 8080

// Lectura y parseo del body
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Routes
app.use('/', require('./routes/human') );
app.use('/', require('./routes/morse') );

// Port Listening
app.listen( port, () => {
    console.log(`Servidor corriendo en puerto ${ port }`);
});






