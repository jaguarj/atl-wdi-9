//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var piratesList = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
	res.render("pirates/index.hbs", {
		pirates: piratesList
	});
});


router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});


//this is for each pirate page
router.get('/:id', function(req, res){

	//grab the pirate by id
	var showPirate = piratesList[req.params.id];

	res.render("pirates/show.hbs", {
		pirate: showPirate
	});
});


//==============================
// CREATE
//==============================
router.post('/', function(req, res){
	console.log(req.body);
	var newPirate = {
		name: req.body.name,
		birthplace: req.body.birthplace,
		death_year: req.body.death_year,
		base: req.body.base,
		nickname: req.body.nickname
	}
	piratesList.push(newPirate);
	res.redirect('/pirates');
});
//==============================
// UPDATE
//==============================
router.get('/:id/edit', function(req, res){
	res.render('pirates/edit.hbs', {
		pirate: piratesList[req.params.id],
		index: req.params.id
	});
});

router.put('/:id', function(req, res) {
	console.log(req.body);
	console.log(req.params);
	var currentPirate = piratesList[req.params.id];
	currentPirate.name = req.body.name;
	currentPirate.birthplace = req.body.birthplace;
	currentPirate.death_year = req.body.death_year;
	currentPirate.base = req.body.base;
	currentPirate.nickname = req.body.nickname;

	res.redirect('/pirates');
});
//==============================
// DESTROY
//==============================
router.delete('/:id', function(req, res){
	piratesList.splice(req.params.id, 1);
	res.redirect('/pirates');
});
//==============================
// EXPORTS
//==============================

module.exports = router;
