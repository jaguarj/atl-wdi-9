// Define variables
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

// Connect DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/infamous-masterminds');


// Set up middleware and views.
// Define what views to use and what templating engine if we need it.
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Setup controller.
var criminalsController = require("./controllers/criminals.js");
app.use('/criminals', criminalsController);

// Setup server.
app.listen(3000);
