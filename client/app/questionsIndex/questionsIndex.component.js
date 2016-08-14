'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './questionsIndex.routes';

export class QuestionsIndexComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('qaApp.questionsIndex', [uiRouter])
  .config(routes)
  .component('questionsIndex', {
    template: require('./questionsIndex.html'),
    controller: QuestionsIndexComponent,
    controllerAs: 'questionsIndexCtrl'
  })
  .name;
