/**
 * Created by dackel on 15.02.15.
 */

var app = angular.module('lovecraft-main', []);

var mainCtrl = app.controller("MainCtrl", ['$scope', '$http', function($scope, $http) {
    this.msg = $http.get("/api/v1/test.json").success(function(data) {
        return data.msg
    })
}]);