//***************************
// REQUIREMENTS
//***************************
// Set up your express dependencies here:
var express 	= require('express');
var app 		= express();
var port 		= process.env.PORT || 3000;
var hbs 		= require('hbs');

var bodyParser	= require('body-parser');
var methodOverride	= require('method-override');

// Views
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', function(req, res){
	res.render('Welcome test');
});

//***************************
// MIDDLEWARE
//***************************
//set up your middleware and view engine here
// var bodyParser	= require('body-parser');
// var methodOverride	= require('method-override');
app.use(methodOverride('_method'));


//***************************
// CONTROLLERS
//***************************
//set up your controller for the `/pokemon` resource
//ex: var pokemonController = require('???')
// var pokemonController = require('./controllers/pokemon_controller.js');// Use this one first, if fail, use next.
var pokemonController = require('./controllers/pokemon.js');
app.use('/pokemon', pokemonController);



//***************************
// LISTENER
//***************************
// Add a listener for port 3000:
app.listen(port, function(){
	console.info('Server is up and running!', port, '//', new Date());
});
