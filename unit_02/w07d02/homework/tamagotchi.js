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
		console.log('foodInTummy');
		console.log('this.name');
		console.log('WAHH!!');

	};

	this.puke = function() {
		this.foodInTummy--;
		console.log('foodInTummy' + 'WAHH!');

	};

	this.yawn = function() {
		this.restedness--;
		console.log(`${this.name} has the current restedness of: ${this.restedness}`);
	};

}

//create new Tamagotchis
var carla = new Tamagotchi("Carla", "dog");
var mike = new Tamagotchi("Mike", "cat");
var james = new Tamagotchi("James", "penguin");
var sara = new Tamagotchi("Sara", "lion");


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

