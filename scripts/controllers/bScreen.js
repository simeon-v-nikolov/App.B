'use strict';

/**
 * @ngdoc function
 * @name mhfApp.controller:BScreen
 * @description
 * # BScreen
 * Controller of the mhfApp
 */
angular.module('mhfApp')
    .controller('BScreen', ['$scope', '$mdDialog',
        function ($scope, $mdDialog) {
            $scope.close = function () {
                return $mdDialog.hide();
            };
        }
    ])
;



