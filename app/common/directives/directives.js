var app = angular.module('app.directives', []);
app.directive('isNumber', function () {
    return {
        require: 'ngModel',
        link: function (scope) {
            scope.$watch('wks.number', function(newValue,oldValue) {
                var arr = String(newValue).split("");
                if (arr.length === 0) return;
                if (arr.length === 1 && (arr[0] == '-' || arr[0] === '.' )) return;
                if (arr.length === 2 && newValue === '-.') return;
                if (isNaN(newValue)) {
                    scope.wks.number = oldValue;
                }
            });
        }
    };
});
