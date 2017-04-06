angular.module('InfamousCriminals')
.controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['CriminalsService'];

<<<<<<< HEAD
function CriminalsController (CriminalsService){

  console.log("Criminals Controller and Criminal Service")
=======
function CriminalsController(CriminalsService){
>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef
  var self = this;
  self.all = [];
  self.addCriminal = addCriminal;
  self.newCriminal = {};
  self.getCriminals = getCriminals;
  self.deleteCriminal = deleteCriminal;

// Live HTTP in Service
  getCriminals();
  function getCriminals(){
    CriminalsService.getCriminals().then(function (criminalsData) {
      self.all = criminalsData;
    });
  }

  function addCriminal(){
<<<<<<< HEAD
    CriminalsService.addCriminal(self.newCriminal).then(function(){
      self.getCriminals();
        self.newCriminal = {};
    });

        getCriminals();
=======
   CriminalsService.addCriminal(self.newCriminal).then(function(){
     self.getCriminals();
       self.newCriminal = {};
   });
>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef
  }

  function deleteCriminal(criminal){
    CriminalsService.deleteCriminal(criminal)
<<<<<<< HEAD
    .then(function(response){
=======
      .then(function(response){
>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef
        var index = self.all.indexOf(criminal);
        self.all.splice(index, 1);
      });
  }
}
