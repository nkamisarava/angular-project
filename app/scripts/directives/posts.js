'use strict';

angular.module('angularProjectApp')
    .directive('postList', function () {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: '../../views/post.html'
        };
    });
