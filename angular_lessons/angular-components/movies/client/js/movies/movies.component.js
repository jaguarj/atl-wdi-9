let moviesTemplate = require(__dirname + '/movies.html');
let moviesController = require(__dirname + '/movies.controller.js');

let MoviesComponent = { //Simple object, this is what has to be here.
    template: moviesTemplate,
    controller: moviesController
};
// movies is now <movies></movies>
angular.module('moviesApp').component('movies', MoviesComponent);
