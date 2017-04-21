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
<<<<<<< HEAD
		CriminalsService
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response){
=======
=======
>>>>>>> 203a9eef1f30cd471464002baf3e3139f87d4dee

		CriminalsService
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response) {
<<<<<<< HEAD
>>>>>>> 3e3180896ffa1dda19c82ac4ba2305f00d2a4db4
=======
>>>>>>> 203a9eef1f30cd471464002baf3e3139f87d4dee
				vm.current = response.data.criminal;
			});
	}
}

module.exports = CriminalsShowController;
