const controller = require('./criminals.controller.js');
const template = require('./criminals.html');

const component = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
	  controller: controller,
	  template: template
=======
=======
>>>>>>> 203a9eef1f30cd471464002baf3e3139f87d4dee
=======
>>>>>>> 203a9eef1f30cd471464002baf3e3139f87d4dee
	controller: controller,
	template: template
>>>>>>> 3e3180896ffa1dda19c82ac4ba2305f00d2a4db4
};

angular
	.module('criminals')
	.component('criminals', component);
