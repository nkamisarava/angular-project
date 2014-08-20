'use strict';

angular.module('angularProjectApp')
    .directive('modalForm', function () {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: '../../views/popup.html'
        };
    });
