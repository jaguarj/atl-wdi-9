var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

var ItemSchema = new Schema({
  name: String
});


var ProjectIdeaSchema = new Schema({//We embed this on the user schema. It needs to be on top.
  description: String,
  in_progress: Boolean,
  created_at: Date,
  updated_at: Date
});

ProjectIdeaSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});


var UserSchema = new Schema({
  first_name: String,
  last_name: String,
  email: { type: String, required: true, unique: true },
  created_at: Date,
  updated_at: Date,
  items: [ItemSchema],
  projectIdeas: [ProjectIdeaSchema]
});

UserSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

var UserModel = mongoose.model("User", UserSchema);
var ItemModel = mongoose.model("Item", ItemSchema);
var ProjectIdeaModel = mongoose.model("ProjectIdea", ProjectIdeaSchema);


module.exports = {//This is the object that can be required elsewhere.
  User: UserModel,
  Item: ItemModel,
  ProjectIdea: ProjectIdeaModel
};
