/*
 *    Copyright 2016 OICR
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

'use strict';

/**
 * @ngdoc directive
 * @name dockstore.ui.directive:workflowDagView
 * @description
 * # workflowDagView
 */
angular.module('dockstore.ui')
  .directive('workflowDagView', function () {
    return {
      restrict: 'AE',
      controller: 'WorkflowDagViewCtrl',
      scope: {
      	workflowObj: '=',
      },
      templateUrl: 'templates/workflowdagview.html',
      link: function postLink(scope, element, attrs) {
        scope.$watch('workflowObj', function(newValue, oldValue) {
          if (newValue) {
            scope.checkVersion();
            scope.setDocument();
            scope.refreshDocument();
          }
        });
        scope.$watchGroup(
          ['selVersionName'],
          function(newValues, oldValues) {
              scope.refreshDocument();
        });
        scope.$on('refreshFiles', function(event) {
          scope.setDocument();
          scope.refreshDocument();
        });
        scope.$on('checkVersion', function(event){
          scope.checkVersion();
        });

      }
    };
  });
