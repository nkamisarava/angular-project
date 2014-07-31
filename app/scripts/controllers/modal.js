'use strict';

var ModalDemoCtrl = function ($rootScope, $scope, $modal) {
    $scope.data = {};
    $rootScope.posts = [
        {
            author: "Some Person",
            date: "11:21 July 31, 2014",
            img: "http://e-notice.ru/uploads/posts/2013-12/1388159017_8.jpg",
            title: "Blogotitle about colorful shit",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut" +
                "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
                "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu" +
                "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit" +
                "anim id est laborum."
        },
        {
            author: "Another Person",
            date: "11:30 July 31, 2014",
            img: "http://relaxic.net/wp-content/uploads/2012/11/Iceland_00003.jpg",
            title: "Another title about following post",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut" +
                "labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
                "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu" +
                "fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit" +
                "anim id est laborum."
        }
    ];

    $scope.open = function (size) {

        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: ModalInstanceCtrl,
            size: size,
            resolve: {
                data: function () {
                    return $scope.data;
                }
            }
        });
    };
};

var ModalInstanceCtrl = function ($rootScope, $scope, $modalInstance, data) {
    $scope.data = data;

    $scope.submit = function () {

        $scope.data["date"] = new Date();
        //$scope.data.concat($scope.date);
        console.info($scope.data);
        $rootScope.json3 = angular.toJson($scope.data);
        //$rootScope.json_t = $rootScope.json3.push(angular.toJson($scope.date));

        $rootScope.test = $rootScope.posts.push(angular.fromJson($rootScope.json3));
        $modalInstance.close($scope.data);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
};

