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

        $urlRouterProvider.otherwise("login");
        //$locationProvider.html5Mode(true);
    }]);