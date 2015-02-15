/**
 * Created by dackel on 15.02.15.
 */

var app = angular.module('lovecraft-main', []);

var mainCtrl = app.controller("MainCtrl", ['$scope', '$http', function($scope, $http) {
    $http.get("/api/v1/test.json").success(function(data) {
        console.log(data);
        this.msg = data.msg;
    }).error(function(data, status) {
        console.log("Erroneous response:" + data + ", " + status);
        this.msg = "FAIL";
    });
}]);