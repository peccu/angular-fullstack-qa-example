'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './questions.routes';

export class QuestionsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
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
