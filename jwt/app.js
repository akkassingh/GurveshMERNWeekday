var express = require('express');
var app = express();
var db = require('./db');
var authController = require('./auth/authController');
app.use('/api', authController);

module.exports = app;