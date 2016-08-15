'use strict';

/*@ngInject*/
export default function($routeProvider) {
  $routeProvider
    .when('/questionsIndex', {
      template: '<questions-index></questions-index>'
    });
}
