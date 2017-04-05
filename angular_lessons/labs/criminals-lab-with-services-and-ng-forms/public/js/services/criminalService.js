angular.module('InfamousCriminals')
.service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {

	var apiService = this;

	apiService.getCriminals = function() {
		return $http
	    	.get('/criminals')
	    	.then(function(response) {
	    		return response.data.criminals;
    	  	});

	}

	apiService.addCriminal = function(newCriminal) {
		return $http
			.post('/criminals', newCriminal);

	}

	apiService.deleteCriminal = function(criminal) {
		return $http
			.delete('/criminals/' + criminal._id);

	}
}
