'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('qaApp.util', [])
  .factory('Util', UtilService)
  .name;
