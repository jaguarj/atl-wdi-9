var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');

mongoose.Promises = global.Promise;//Review your promises

var db = mongoose.connection;

db.on('error', function(err) {
	console.log(err);
});

db.once('open', function() {
	console.log("database has been connected!");
});

db.close();

var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
	title: String,
	unit: String
});

// First, we instantiate a namespace for our Schema constructor defined by mongoose.
var StudentSchema = new Schema({
	name: String,
	age: Number,
	projects: [ProjectSchema]
});

//Mongo will add a primary key to each object using ObjectId.
//This will be referenced as an id property on each new instance of the object.



////////////////////////////////////////////////////////////////////////////
//Mongoose Models will represent documents in our database.

//They are essentially constructor functions, which will allow us to preform CRUD actions within our MongoDB Database.
//Models are defined by passing a Schema instance to mongoose.model.


//The first argument is the singular name
//of the collection that your model is for. Mongoose automatically
//looks for the plural version of your model name.

var ProjectModel = mongoose.model('Project', ProjectSchema);
var StudentModel = mongoose.model('Student', StudentSchema);

// This means that the model name 'Student' will correspond to
//the students collection in the database.

///////////////////////////////////////////////////////////////////////////////

// var frankie = new StudentModel({name: "Frankie P.", age: 30});
// var anna = new StudentModel({name: "Anna", age: 28});
var project1 = new ProjectModel({title: "memory game", unit: "JS"});

// frankie.projects.push(project1);

// frankie.save(function(err, student){
// 	if (err) {
// 		console.log(err);
// 	}
// 	else {
// 		console.log(student);
// 	}
// });

// anna.projects.push(project1);

// anna.save(function(err, student){
// 	if (err) {
// 		console.log(err);
// 	}
// 	else {
// 		console.log(student + " was saved you our db!");
// 	}
// });
module.exports = {
  StudentModel: StudentModel,
  ProjectModel: ProjectModel
};
