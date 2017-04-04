angular.module('InfamousCriminals')
  .controller('CriminalsController', CriminalsController);


CriminalsController.$inject = ['$http']; // Inject $http Dependency.

function  CriminalsController($http) {
	var vm = this; // add this variable here to make it more uniform later.

	vm.addCriminal = addCriminal;
	vm.all = [];
	vm.deleteCriminal = deleteCriminal;
	vm.getCriminals = getCriminals;
	vm.newCriminal = {};

	activate();

  	function activate() { // Initiate to get all criminals.

	getCriminals();
	function getCriminals() {
		$http
			.get('/criminals')
			.then(function showResponse(response){
			   vm.all = response.data.criminals;
			}, function showReject(response) {
			   console.log(repsonse.message);
			});
	}

	function addCriminal() {
		$http
			.post('/criminals', vm.newCriminal)
			.then(function showResponse(response){
				vm.all.push(response.data.criminal);
				vm.newCriminal = {};
			},  function showReject(response)
				console.log(response.data.message);
			});
	}

	function deleteCriminal() {
		$http
			.delete('/criminals/' + criminal._id)
			.then(function showResponse(response) {
				console.log(response.data.message);
				// Functional method - return criminal id that is not deleted currentCriminal id.
				vm.all = vm.all.filter(function(currentCriminal){
					return criminal._id !== currentCriminal._id;
			});

	}

}
