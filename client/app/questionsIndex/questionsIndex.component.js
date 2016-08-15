'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './questionsIndex.routes';

export class QuestionsIndexComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('qaApp.questionsIndex', [ngRoute])
  .config(routes)
  .component('questionsIndex', {
    template: require('./questionsIndex.html'),
    controller: QuestionsIndexComponent,
    controllerAs: 'questionsIndexCtrl'
  })
  .name;
