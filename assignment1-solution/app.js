// Assignment 1 - Sandy Belle 9/21/16
(function () {
'use strict';

angular.module('LunchCheck', []) //(7) declare an LunchCheck Module

.controller ('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter){
    $scope.lunchDishes = "";
    $scope.totalValue = 0;
    $scope.lunchMessage = "";

    $scope.displayMessage = function () {
      var totalNameValue = calculatNumericForString($scope.lunchDishes);
      if (totalNameValue == 0) {$scope.lunchMessage = "Please enter data first";}
        else {
          var num = splitString($scope.lunchDishes, ',');
          if (num < 4) {$scope.lunchMessage = "Enjoy! "; } else {
            $scope.lunchMessage = "Too Much!  ";
          }
        }
      $scope.totalValue = totalNameValue;
    };

    function calculatNumericForString(string) {
      var totalStringValue = 0;
      for (var i = 0; i < string.length; i++) {
        totalStringValue += string.charCodeAt(i);
      }
      return totalStringValue;
    }

    function splitString(stringToSplit, separator) {
      var arrayOfStrings = stringToSplit.split(separator);

      console.log('The original string is: "' + stringToSplit + '"');
      console.log('The separator is: "' + separator + '"');
      console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
      return arrayOfStrings.length;
    }
};

})();
