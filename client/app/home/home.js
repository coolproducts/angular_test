'use strict';

angular.module('TestApp')
  .config(function ($stateProvider) {

  	$stateProvider  	
  	  .state('home', {
        url:'/home',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
    })
  });