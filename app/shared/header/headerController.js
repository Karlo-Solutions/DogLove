app.controller('headerController', function ($localStorage, $state, $scope, RestaurantUser) {
    $scope.storage = $localStorage;
    $scope.openMenu = function ($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
    }
    $scope.logout = function () {
        RestaurantUser.logout({});
        $localStorage.user = null;
        $localStorage.profile = null;
        $state.go('login');
    }
});
