'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './questionsCreate.routes';

export class QuestionsCreateComponent {
  /*@ngInject*/
  constructor($http, $location) {
    this.$http = $http;
    this.$location = $location;
    this.message = 'Hello';
  }

  addQuestion() {
    if (this.question) {
      this.$http.post('/api/questions', this.question)
      .then(response => {
        this.$location.path('/questions');
      });
    }
  }

}

export default angular.module('qaApp.questionsCreate', [ngRoute])
  .config(routes)
  .component('questionsCreate', {
    template: require('./questionsCreate.html'),
    controller: QuestionsCreateComponent,
    controllerAs: 'questionsCreateCtrl'
  })
  .name;
