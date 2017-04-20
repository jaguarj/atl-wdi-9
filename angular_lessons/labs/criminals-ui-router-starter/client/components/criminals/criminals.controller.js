CriminalsController.$inject = ['CriminalsService'];

function CriminalsController(CriminalsService) {
	const vm = this;

	// WHAT THIS CONTROLLER HAS / DOES THAT IS CONNECTED TO THE VIEW
	vm.criminals = [];
	vm.loading = true;
	// vm.addCriminal = addCriminal;
	// vm.newCriminal = newCriminal;
	// vm.deleteCriminal = deleteCriminal;
	// vm.editCriminal = editCriminal;




	// activate === BEST PRACTICE, ALWAYS DO IT, EVEN IF EMPTY
	activate();

	function activate() {
		loadAllCriminals();
	}


	// HOW IT DOES STUFF
	function loadAllCriminals() {
		CriminalsService
			.loadAll()
			.then(function resolve(response) {
				console.log(response)
				vm.criminals = response.data.criminals; // array of criminals
				vm.loading = false;
			});
	}

	// function addCriminal() {
	// 	CriminalsSerivce
	// }

}
// 	function
// }

module.exports = CriminalsController;
