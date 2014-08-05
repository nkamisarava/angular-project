'use strict';

angular.module('angularProjectApp').controller('postCtrl', function ($scope, $http) {
    $http({method: 'GET', url: '../../library/simplsde.json'}).
        success(function(data, status, headers, config) {
            console.log('ok');
            $scope.posts = data;
        }).
        error(function(data, status, headers, config) {
            alert('no such json is found');
            $scope.posts = [];
        });



    $scope.submit = function () {
        console.log($scope.data);
        $scope.data["date"] = new Date();
        console.log($scope.data);
        $scope.json = angular.toJson($scope.data);
        console.log($scope.json);
        $scope.posts.push(angular.fromJson($scope.json));
        console.log($scope.posts);
        $scope.data = {};
        $scope.postForm.$setPristine();
        $('#myModal').modal('hide');

    };

});