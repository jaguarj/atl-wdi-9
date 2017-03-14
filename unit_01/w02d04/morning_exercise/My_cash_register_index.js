// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///




var makeChange = function(price, payment) {
	if (price === payment){
		alert('You gave me exact change! Thanks!');
	} else if (price > payment) {
		alert('Please pay the balance of');//Run a function.
		return .push(payment - price);
	} else {

	}
}


var price = {
	cost: 5.60,
	payment: 6.00,
change: function () {
	return this.payment - this.cost;
}
};




var arr1 = [1,1,1,0],



  // Your Code Here
};

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
