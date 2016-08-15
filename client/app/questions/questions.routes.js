'use strict';

/*@ngInject*/
export default function($routeProvider) {
  $routeProvider
    .when('/questions', {
      template: '<questions></questions>'
    });
}
