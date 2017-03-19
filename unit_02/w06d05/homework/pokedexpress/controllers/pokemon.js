//***************************
// REQUIREMENTS
//***************************
// Set up your express dependency here:
var express 	= require('express');




// Set express Router to a variable called router:
// console.log("Router line 27 pokemon.js");
var router = express.Router();

// Let's export this router file at the bottom of the page:
// (Scroll to bottom to Exports)

// Require the poke_array.js file here from models.
// Save it to a variable called data:

var data = require('../models/poke_array.js');


//***************************
// READ
//***************************
// Note: All the routes below can be accessed at `localhost:3000/pokemon` + `resource`
// Make a GET route '/' that will render an index page of all pokemon images
//GET is a read requet for the for the specified file, cannot update or delete.
//Add the name as a key value pair for the render.
//All HTTP verb methods take two params 1. path 2. the function that should fire
//when path is clicked.

//render takes two params 1. is the view and not the path 2. is the data that
//you're putting into the view.
router.get('/index', function(req, res) {
	console.log(data);
	res.render('index.hbs', {
		// pokemon: data.poke_array.js
		pokemonList: data,

	});
});



// Make a GET route '/index/:index' that will render the Pokemon's show page at that :index
//
// Example: a user goes to 'localhost:3000/pokemon/index/0' in the browser and data for Bulbasaur (the pokemon at index 0) will be displayed.
// Show route?
// : is the wildcard param. ex. localhost://3000/pokemon/index/5, 5 is the wildcard parameter
// with the key 'index'
// we can access what the user put in by calling req.params.index (it's index because that's)
// what we labeled after the wildcard (the :)
router.get('/index/:index', function(req, res) {
	var currentPokemon = data[req.params.index];
	res.render('show.hbs', {
		pokemon: currentPokemon
	});

});


// Make a GET route '/new' that will simply render a form to create a new Pokemon

router.get('/new', function(req, res) {
	res.render('pokemon/new');
});





//***************************
// CREATE
//***************************
//make a POST route '/' to create a New Pokemon


//***************************
// UPDATE
//***************************

//***************************
// DELETE
//***************************
//make a DELETE route '/:index' that will delete the Pokemon at this index.



//***************************
// EXPORTS
//***************************
// use module.exports to export router:
// this makes the scripts on this page accessible by other files that "require" this file. Without exporting, the code in here just sits in here, alone.
module.exports = router;
