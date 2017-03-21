console.log('tamagotchi file is loaded');

//your constructor function here
function Tamagotchi(name, creatureType, foodInTummy, restedness, health) {
	this.name = name;
	this.creatureType = creatureType;
	this.foodInTummy = 10;
	this.restedness = 10;
	this.health = 10;

	this.cry = function(){
		this.foodInTummy--;
		console.log(`${this.name}`);
		console.log('WAHH!!');
		console.log(`${this.foodInTummy}`);
	};

	this.puke = function() {
		this.foodInTummy--;
		console.log(`${this.foodInTummy} WAHH!`);

	};

	this.yawn = function() {
		this.restedness--;
		console.log(`${this.name} has the current restedness of: ${this.restedness}`);
	};

	this.start = function myFunction() {

	var _that = this;//Set this to a variable to use later. Then append to this.

   	 this.hungerTimer = setInterval(function(){ _that.cry(); }, 6000);
		console.log(`${name}`);
	 this.yawnTimer = setInterval(function(){ _that.yawn(); }, 10000);
		console.log(`${name}`);
	 this.sickTimer = setInterval(function(){ _that.sick(); }, 20000);
		console.log(`${name}`);


	};
	this.stop = function myStopFunction() {
	clearInterval(this.hungerTimer);
	clearInterval(this.yawnTimer);
	clearInterval(this.sickTimer);





}
}

//create new Tamagotchis
var carla = new Tamagotchi("Carla", "dog");
var mike = new Tamagotchi("Mike", "cat");
var james = new Tamagotchi("James", "penguin");
var sara = new Tamagotchi("Sara", "lion");
var bill = new Tamagotchi("Bill", "bear");
var josh = new Tamagotchi("Josh", "tiger");


//test out your Tamagotchies below via console.logs

console.log(carla);
console.log(mike);
console.log(james);
console.log(sara);

// Invoke the Cry function

carla.cry();
mike.cry();
james.cry();
sara.cry();

