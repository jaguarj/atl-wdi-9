CriminalsNewController.$inject = ['$stateParams', 'CriminalsService'];

function CriminalsNewController($stateParams, CriminalsService) {
	const vm = this;

	vm.addCriminal = addCriminal;
	// console.log("Past addCriminal vm.");
	vm.newCriminal = {};
		// console.log("Past newCriminal vm.");



	function addCriminal(newCriminal) {
		console.log(newCriminal);
		CriminalsService
			.addCriminal(newCriminal)
			.then(function() {
				vm.newCriminal = {};
			});
	}
}



module.exports = CriminalsNewController;
