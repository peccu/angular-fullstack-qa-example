'use strict';

import LoginController from './login.controller';

export default angular.module('qaApp.login', [])
  .controller('LoginController', LoginController)
  .name;
