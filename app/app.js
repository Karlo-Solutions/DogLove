var app = angular.module('app', ['ui.router', 'angularFileUpload',
    'app.directives', 'lbServices', 'app.services', 'app.views',
    'ngMaterial', 'ngMap', 'ngStorage']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$mdThemingProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $mdThemingProvider) {

        /*$httpProvider.defaults.useXDomain = true;
         delete $httpProvider.defaults.headers.common['X-Requested-With'];
         $httpProvider.defaults.withCredentials = true;*/

        $mdThemingProvider.theme('gula')
            .primaryPalette('blue')
            .accentPalette('cyan')
            .warnPalette('red');
        $mdThemingProvider.setDefaultTheme('gula');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/components/login/login.html',
                controller: 'loginController'
            })

            .state('reg', {
                url: '/reg',
                templateUrl: 'app/components/register/register.html',
                controller: 'registerController'
            })

            .state('main', {
                url: '/main',
                templateUrl: 'app/components/app/main.html',
                controller: 'mainController',
                resolve: resolve
            })
            .state('menu', {
                url: '/menu',
                templateUrl: 'app/components/app/products/products.html',
                controller: 'productsController',
                resolve: resolve
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'app/components/app/profile/general/profileGeneral.html',
                controller: 'profileGeneralController',
                resolve: resolve
            })
            .state('matches', {
                url: '/matches',
                templateUrl: 'app/components/app/orders/orders.html',
                controller: 'ordersController',
                resolve: resolve
            })

            .state('detail', {
                url: '/detail/:id',
                templateUrl: 'app/components/app/orders/detail/detail.html',
                controller: 'detailController',
                resolve: resolve,
                cache: false
            })


        $urlRouterProvider.otherwise("login");
        //$locationProvider.html5Mode(true);
    }]);


app.run(function ($rootScope, $state) {
    $rootScope.uploadURL = "http://52.8.192.6:3000/api/Containers/profile/upload";
    $rootScope.bgUploadURL = "http://52.8.192.6:3000/api/backgrounds/background/upload";
    $rootScope.imagesURL = "http://52.8.192.6/images";
});

var resolve = {
    isLoggedIn: function ($q, RestaurantUser, $state) {
        var defer = $q.defer();
        if (RestaurantUser.isAuthenticated()) {
            defer.resolve();
            return true;
        }
        $state.go('login');
        return defer.promise;
    }
};
