'use strict'

var express = require('express');
var HumanController = require('../controllers/human');
var api = express.Router();

api.post('/translate/2text', HumanController.translateMorse2Human);
api.get('/translate/test', HumanController.test);

module.exports = api;