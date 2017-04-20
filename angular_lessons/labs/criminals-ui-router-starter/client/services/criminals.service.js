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
	self.addCriminal = addCriminal;
=======
>>>>>>> 3e3180896ffa1dda19c82ac4ba2305f00d2a4db4


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

	}

	function addCriminal(newCriminal) {
		return $http.post('/api/criminals', newCriminal);


=======
>>>>>>> 3e3180896ffa1dda19c82ac4ba2305f00d2a4db4
	}
}
