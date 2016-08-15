'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './questionsShow.routes';

export class QuestionsShowComponent {
  /*@ngInject*/
  constructor($http, $routeParams) {
    this.$http = $http;
    this.$routeParams = $routeParams;
    this.message = 'Hello';
  }

  $onInit() {
    this.$http.get('/api/questions/' + this.$routeParams.id)
      .then(response => {
        this.question = response.data;
      });
  }
}

export default angular.module('qaApp.questionsShow', [ngRoute])
  .config(routes)
  .component('questionsShow', {
    template: require('./questionsShow.html'),
    controller: QuestionsShowComponent,
    controllerAs: 'questionsShowCtrl'
  })
  .name;
