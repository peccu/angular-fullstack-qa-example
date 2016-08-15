'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './questionsShow.routes';

export class QuestionsShowComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
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
