angular
	.module('criminals')
	.service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
	const self = this;

	// WHAT THIS SERVICE DOES / HAS AVAILABLE TO CALL
	self.create = create;
	self.loadAll = loadAll;
	self.loadCurrent = loadCurrent;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
	self.addCriminal = addCriminal;
=======
>>>>>>> 3e3180896ffa1dda19c82ac4ba2305f00d2a4db4
=======
>>>>>>> 203a9eef1f30cd471464002baf3e3139f87d4dee
=======
>>>>>>> 203a9eef1f30cd471464002baf3e3139f87d4dee


	// HOW IT DOES STUFF
	function create(criminalData) {
		return $http
			.post('/api/criminals', criminalData);
	}

	function loadAll() {
		return $http.get('/api/criminals');
	}

	function loadCurrent(id) {
		return $http.get('/api/criminals/' + id);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

	}

	function addCriminal(newCriminal) {
		return $http.post('/api/criminals', newCriminal);


=======
>>>>>>> 3e3180896ffa1dda19c82ac4ba2305f00d2a4db4
=======
>>>>>>> 203a9eef1f30cd471464002baf3e3139f87d4dee
=======
>>>>>>> 203a9eef1f30cd471464002baf3e3139f87d4dee
	}
}
