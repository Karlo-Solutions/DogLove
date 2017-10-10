app.controller('loginController', function ($scope, RestaurantUser, $state, $localStorage) {
    $scope.user = {
        email:'',
        password:''
    };
    $scope.logon = function () {
        $scope.badLogin = false;
        RestaurantUser.login($scope.user, function (res) {
            RestaurantUser.restaurants({
                id:RestaurantUser.getCurrentId()
            },function(restaurant){
                $localStorage.profile = restaurant;
                $state.go('main');
            })
        }, function (err) {
            $scope.badLogin = true;
        })
    }
});
