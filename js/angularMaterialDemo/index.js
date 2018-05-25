let myApp = angular.module('myApp', ["ngMaterial"]);
myApp.controller('myCtrl', ($scope, $timeout, $mdSidenav) => {
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        };
    }
});