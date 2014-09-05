'use strict';

angular.module('angularProjectApp')
    .controller('detailsCtrl', ['$scope', '$http', '$routeParams', 'Post', function ($scope, $http, $routeParams, Post) {
        Post.get({_id: $routeParams._id}).$promise.then(function (data) {
            $scope.post = data;
        });
    }]);

