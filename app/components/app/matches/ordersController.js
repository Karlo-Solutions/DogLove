app.controller('ordersController', function ($scope, $localStorage, RestaurantUser) {
    var init = function () {
        RestaurantUser.orders({
            id:RestaurantUser.getCurrentId(),
            filter:{
                include:[
                    {
                        relation:'restaurant'
                    }
                ]
            }
        },function(res){
            $scope.orders = res;
        });
    };

    init();
});

