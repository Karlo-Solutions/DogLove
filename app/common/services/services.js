var app = angular.module('app.services', []);

app.service('Progress', function () {
    this.active = false;
    this.title = null;
    var self = this;

    this.show = function (_title) {
        if (_title) {
            self.title = _title;
        }
        self.active = true;
    };
    this.hide = function () {
        self.active = false;
        self.title = "";
    };
});