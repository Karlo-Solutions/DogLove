app.controller('detailController', function ($scope, RestaurantUser, $stateParams) {

    var init = function () {
        RestaurantUser.orders.findById({
            id: RestaurantUser.getCurrentId(),
            fk: $stateParams.id
        }, function (orders) {
            $scope.order = orders;
        });
    };

    init();
});
