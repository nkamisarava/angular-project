'use strict';

angular.module('angularProjectApp')
    .directive('modalForm', function () {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: '../../views/popup.html',
            controller: function ($scope, $http) {
                $http({method: 'GET', url: '../../library/simple.json'}).
                    success(function (data) {
                        console.log('ok');
                        $scope.posts = data;
                    }).
                    error(function () {
                        alert('no such json is found');
                        $scope.posts = [];
                    });


                $scope.submit = function () {
                    $scope.data.date = new Date();
                    $scope.json = angular.toJson($scope.data);
                    $scope.posts.push(angular.fromJson($scope.json));
                    console.log($scope.posts);
                    $scope.data = {};
                    $scope.postForm.$setPristine();
                    $('#myModal').modal('hide');

                };

            }
        };
    });
