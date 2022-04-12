'use strict'

var express = require('express');
var MorseController = require('../controllers/morse');
var api = express.Router();

api.post('/decode/2morse', MorseController.decodeBits2Morse);
api.post('/translate/2morse', MorseController.translateHuman2Morse);

module.exports = api;