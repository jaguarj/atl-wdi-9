CriminalsShowController.$inject = ['$stateParams', 'CriminalsService'];

function CriminalsShowController($stateParams, CriminalsService) {
	const vm = this;

	vm.current = {};

	activate();

	function activate() {
		loadCurrentCriminal();
	}

	function loadCurrentCriminal() {
		console.log($stateParams);
<<<<<<< HEAD
		CriminalsService
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response){
=======

		CriminalsService
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response) {
>>>>>>> 3e3180896ffa1dda19c82ac4ba2305f00d2a4db4
				vm.current = response.data.criminal;
			});
	}
}

module.exports = CriminalsShowController;
