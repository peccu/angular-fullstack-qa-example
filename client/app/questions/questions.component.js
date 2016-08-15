'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './questions.routes';

export class QuestionsComponent {
  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('questions');
    });

    this.message = 'Hello';
  }

  $onInit() {
    this.$http.get('/api/questions')
      .then(response => {
        this.questions = response.data;
        this.socket.syncUpdates('questions', this.questions);
      });
  }

}

export default angular.module('qaApp.questions', [ngRoute])
  .config(routes)
  .component('questions', {
    template: require('./questions.html'),
    controller: QuestionsComponent,
    controllerAs: 'questionsCtrl'
  })
  .name;
