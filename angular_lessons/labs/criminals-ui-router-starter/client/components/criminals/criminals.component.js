const controller = require('./criminals.controller.js');
const template = require('./criminals.html');

const component = {
<<<<<<< HEAD
	  controller: controller,
	  template: template
=======
	controller: controller,
	template: template
>>>>>>> 3e3180896ffa1dda19c82ac4ba2305f00d2a4db4
};

angular
	.module('criminals')
	.component('criminals', component);
