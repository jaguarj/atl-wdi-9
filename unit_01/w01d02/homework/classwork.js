// General Assembly, WDI (Web Development Immersive) Remote, Cohort 04 (Matey)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

/// Basic Data Types and Expressions ///
// For each expression below, indicate whether it is 'truthy' or 'falsey'
// by assigning the appropriate variable a value of either `true` or `false`.

<<<<<<< HEAD
// 1. true || false
var resOne = ( 1 === 1 || 1 ===  2);
true




// 2. null || ''
var resTwo;
false

// 3. 'false' && true
> var resThree = (true && false);
false

// 4. !!0
var resFour;
false

// 5. !null && !undefined
var resFive;
true
=======
// 1. true || false 
var resOne;
// Replace This Comment With Your Code

// 2. null || ''
var resTwo;
// Replace This Comment With Your Code

// 3. 'false' && true
var resThree;
// Replace This Comment With Your Code

// 4. !!0
var resFour;
// Replace This Comment With Your Code

// 5. !null && !undefined
var resFive;
// Replace This Comment With Your Code
>>>>>>> 0a0961d6539d4b047d99e21897bbb5e0c0e0ee24

/// Flow Control ///

// 6. Write a `while` loop that increases `resSix` by 23 until `resSix` is five
//    digits long. (Hint: take a look at the .toString() method)
<<<<<<< HEAD
var resSix = 5;
console.log(resSix.toString().length);

while (resSix.toString().length < 5){

  resSix+=23;
}
console.log(resSix);


Answer:
1
10010




=======
var resSix;
// Replace This Comment With Your Code
>>>>>>> 0a0961d6539d4b047d99e21897bbb5e0c0e0ee24

// 7. Write a `while` loop that increases `resSeven` by 12 when it's strictly
//    below 95, decreases it by 7 when it's strictly above 105, and stops as
//    soon as `resSeven` equals or falls between those two values.
<<<<<<< HEAD
var resSeven = 65;
while (resSeven === 105 || resSeven === 95) {
  if (resSeven > 105) {
    resSeven -= 7;
  } else if (resSeven < 95) {
    resSeven += 12;
  }
}
=======
var resSeven;
// Replace This Comment With Your Code
>>>>>>> 0a0961d6539d4b047d99e21897bbb5e0c0e0ee24

console.log(resSeven);
Answer = 101






// 8. Write a `for` loop that counts from 0 (inclusive) to 1857 (exclusive) and
//    calculates the sum of all of those numbers, storing the result in the
//    variable `resEight`.
var resEight;
resEight = 0;
for (i = 0; i < 1857; i++) {
  resEight += i;
}

console.log(resEight);

1725153


// 9. Using a `for` loop, calculate the sum of all multiples of 7 between 0
//    (inclusive) and 1000 (exclusive); store the result in the variable
//    `resNine`.
var resNine;
resNine = 0;
for (i = 0; i < 1000; i++){
  if (i % 7 === 0) {
      resNine +=i;
  }
}

resNine;

71071


// 10. For numbers 1-10, calculate n^n and then store the sum of all of these values in the variable `resTen`.
var resTen;
var resTen = 0;
for (var i = 1; i <= 10; i++){
  var product = 1;
    for (var j = 0; j < i; j++){
      product *= i;
  }
 resTen += product;
}

resTen;

10405071317

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  one: resOne,
  two: resTwo,
  three: resThree,
  four: resFour,
  five: resFive,
  six: resSix,
  seven: resSeven,
  eight: resEight,
  nine: resNine,
  ten: resTen
}
