'use strict';

/**
 * @ngdoc function
 * @name smartText2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the smartText2App
 */
angular.module('smartText2App')
  .controller('MainCtrl', function ($scope) {
    $scope.flashCards = [
      { prompt:'HTML5 Boilerplate', answer:"text" },
      { prompt:'AngularJS', answer:"text" },
      { prompt:'Karma', answer:"text" }
    ];
  });
