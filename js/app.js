/**
 * Created by dackel on 15.02.15.
 */

var app = angular.module('lovecraft-main', []);

var mainCtrl = app.controller("MainCtrl", ['$scope', '$http', function($scope, $http) {
    this.msg = "Nothing";
    var self = this;

    $http.get("/api/v1/test.json").success(function(data) {
        console.log(data);
        self.msg = data.msg;
    }).error(function(data, status) {
        console.log("Erroneous response:" + data + ", " + status);
        self.msg = "FAIL";
    });
}]);
