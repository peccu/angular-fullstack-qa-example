'use strict';

/*@ngInject*/
export default function($routeProvider) {
  $routeProvider
    .when('/questions/create', {
      template: '<questions-create></questions-create>'
    });
}
