app.controller('registerController', function ($scope, $mdDialog, $state, Progress, RestaurantUser) {
    $scope.newUser = {};
    $scope.register = function () {
        Progress.show();
        RestaurantUser.create($scope.newUser, function (res) {
            Progress.hide();
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('Gulafood')
                    .textContent('Bienvenido a Gulafood, te hemos enviado un ' +
                    'correo con las instrucciones para completar tu registro.')
                    .ok('Aceptar')
            );

            $state.go('login')

        }, function () {
            Progress.hide();
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('Gulafood')
                    .textContent('Ha ocurrido un error en el registro, por favor contacte a soporte')
                    .ok('Aceptar')
            );
        });
    }
});
