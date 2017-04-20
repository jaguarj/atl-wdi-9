const mongoose = require('mongoose');

var CriminalSchema = mongoose.Schema({
	name: String,
<<<<<<< HEAD
   crime: String
=======
  crime: String,

>>>>>>> 3e3180896ffa1dda19c82ac4ba2305f00d2a4db4
});

module.exports = mongoose.model('Criminal', CriminalSchema);
