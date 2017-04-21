const mongoose = require('mongoose');

var CriminalSchema = mongoose.Schema({
	name: String,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
   crime: String
=======
  crime: String,

>>>>>>> 3e3180896ffa1dda19c82ac4ba2305f00d2a4db4
=======
  crime: String,

>>>>>>> 203a9eef1f30cd471464002baf3e3139f87d4dee
=======
  crime: String,

>>>>>>> 203a9eef1f30cd471464002baf3e3139f87d4dee
});

module.exports = mongoose.model('Criminal', CriminalSchema);
