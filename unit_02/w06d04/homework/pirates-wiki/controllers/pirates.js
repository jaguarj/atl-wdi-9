var express = require('express');//your code below

var router = express.Router();
var piratesArray = require('../models/pirates.js');

//GET or Read home page Step 1.
router.get('/', function(req, res){
	res.render('index', pirates {
		pirates: piratesArray
	});
});








//GET or Read new page
router.get('/new', function(req, res){
	res.render('new');
});

//Create Post Home page
router.post('/', function(req, res){
	var newPirate = {
		name: req.body.name,
		birthplace: req.body.birthplace,
		death_year: req.body.death_year,
		base: req.body.base,
		nickname: req.body.nickname
	};
	pirates.push(newPirate);
	res.redirect('/pirates');
});

//Create new pirates page
router.get('/:id', function(req, res){
	var pirateInfo = pirates[req.params.id];
	res.render('show', {
		pirate: pirateInfo
	});
});

//Exports
module.exports = router;
//your code below
