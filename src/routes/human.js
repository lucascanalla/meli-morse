'use strict'

var express = require('express');
var HumanController = require('../controllers/human');
var api = express.Router();

api.post('/translate/2text', HumanController.translate2Human);
api.get('/translate/prueba', HumanController.pruebas);

module.exports = api;