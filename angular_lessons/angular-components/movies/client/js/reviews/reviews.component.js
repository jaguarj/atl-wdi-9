let reviewsTemplate = require(__dirname + '/reviews.html');
let reviewsController = require(__dirname + '/reviews.controller.js');

let ReviewsComponent = { //Simple object, this is what has to be here.
    template: reviewsTemplate,
    controller: reviewsController
};

angular.module('moviesApp').component('reviews', ReviewsComponent);
