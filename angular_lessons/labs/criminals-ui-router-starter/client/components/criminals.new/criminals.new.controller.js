<<<<<<< HEAD
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
=======
CriminalsNewController.$inject = ['$state', 'CriminalsService'];

function CriminalsNewController($state, CriminalsService) {
	const vm = this;

	vm.createCriminal = createCriminal;
	vm.newCriminal = {};

	activate();

	function activate() {}

	function createCriminal() {
		CriminalsService
			.create(vm.newCriminal)
			.then(function resolve(response) {
				const id = response.data.criminal._id;
				$state.go('criminalsShow', { criminalId: id });
>>>>>>> 3e3180896ffa1dda19c82ac4ba2305f00d2a4db4
			});
	}
}

<<<<<<< HEAD


=======
>>>>>>> 3e3180896ffa1dda19c82ac4ba2305f00d2a4db4
module.exports = CriminalsNewController;
