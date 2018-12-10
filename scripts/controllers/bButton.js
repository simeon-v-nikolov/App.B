'use strict';

/**
 * @ngdoc function
 * @name mhfApp.controller:BButton
 * @description
 * # BButton
 * Controller of the mhfApp
 */
angular.module('mhfApp')
    .controller('BButton', ['$scope', '$mdDialog',
        function ($scope, $mdDialog) {
            $scope.onClickB = function () {
                return $mdDialog.show({
                    templateUrl: '../App.B/views/bScreen.html',
                    controller: 'BScreen',
                });
            };
        }
    ])
;



