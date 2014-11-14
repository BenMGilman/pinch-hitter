'use strict';

angular.module('pinchHitterApp')
.controller('OffenseCtrl', function ($scope) {
    $scope.away = ['Ben Gilman', 'Brandon Storm', 'Evan Brown', 'Derek Skrdlant', 'Cody Marvel', 'Austin Reid', 'Patrick Ihme', 'Nate Olinger', 'Christian Rooney'];
    $scope.home = ['Charlie Basil', 'Cody Marvel', 'Shane Johnson', 'Zach Bothwell', 'Tyler P. Thornton', 'Elliot Reige', 'Tommy Rodgers', 'Blake Dunham', 'Clark Martin'];
});