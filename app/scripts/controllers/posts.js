'use strict';

angular.module('angularProjectApp')
    .controller('postCtrl', ['$scope', '$route', 'Post', function ($scope, $route, Post) {

        $scope.post = new Post();
        $scope.posts = Post.query();

        $scope.newPost = function () {
            $scope.post = new Post();
            $scope.editing = false;
        };

        $scope.clean = function () {
            $scope.post = {};
            $scope.postForm.$setPristine();
        };

        $scope.activePost = function (post) {
            $scope.selected = post;
            $scope.post = post;

            $scope.editing = !$scope.editing;
            if (!$scope.editing){
                $scope.clean();
            }
        };

        $scope.submit = function (post) {
            $scope.post.date = new Date();
            if ($scope.post._id) {
                Post.update({_id: $scope.post._id}, $scope.post);
                $scope.postForm.$setPristine();
                angular.element('#myModal').modal('hide');
            } else {
                $scope.post.$save($scope.post).then(function (response) {
                    $scope.posts.push(response);
                    $scope.clean();
                    angular.element('#myModal').modal('hide');
                });
            }
            $scope.editing = false;
            $scope.post = new Post();
        };

        $scope.dismiss = function () {
            $scope.editing = false;
            $scope.clean();
            angular.element('#myModal').modal('hide');
        };

        $scope.delete = function (post) {
            Post.delete(post).$promise.then(function () {
                $scope.posts = Post.query();
            });
        };

    }]);