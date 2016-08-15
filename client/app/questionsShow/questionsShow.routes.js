'use strict';

/*@ngInject*/
export default function($routeProvider) {
  $routeProvider
    .when('/questions/show/:id', {
      template: '<questions-show></questions-show>'
    });
}
