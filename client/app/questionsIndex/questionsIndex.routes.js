'use strict';

/*@ngInject*/
export default function($stateProvider) {
  $stateProvider
    .state('questionsIndex', {
      url: '/questionsIndex',
      template: '<questions-index></questions-index>'
    });
}
