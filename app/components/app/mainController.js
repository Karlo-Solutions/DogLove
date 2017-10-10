app.controller('mainController', function ($scope, $rootScope, $localStorage, RestaurantUser) {
    $scope.storage = $localStorage;

    var init = function () {
        RestaurantUser.stats({}, function (res) {
            $scope.stats = res.data;
        });
        RestaurantUser.orders({
            id: RestaurantUser.getCurrentId(),
            filter: {
                limit: 10
            }
        }, function (res) {
            $scope.lastOrders = res;
        });

    };

    init();
});