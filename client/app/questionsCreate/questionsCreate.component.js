'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './questionsCreate.routes';

export class QuestionsCreateComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
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
