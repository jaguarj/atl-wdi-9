//*************************
// Problem 1:
// Barrels O' RUM

// var barrels = function(small, large, total){
//   var smallBarrel = 60;
//   var largeBarrel = 141;
//   var largeBarrel = (total - (small * smallBarrel)) / large;


// return largeBarrel;
// };

var barrels = function(small, large, total){
  var smallBarrel = 60;
  // var largeBarrel = 141;
  var largeBarrel = (total - (small * smallBarrel)) / large;
  console.log("Here is where we are going to calc a new and grandTotal.")
  var newTotal = ((small * smallBarrel) + (large * largeBarrel));
  var grandTotal = newTotal;

return grandTotal;
};

barrels(2,5,825);









//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  //your code here
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
  //your code here
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
