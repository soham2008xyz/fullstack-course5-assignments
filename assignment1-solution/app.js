(function () {
  "use strict";

  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);

  function LunchCheckController($scope) {
    $scope.dishes = "";
    $scope.message = "";

    $scope.checkIfTooMuch = function() {
      var dishes = getDishesAsArray($scope.dishes);
      if(dishes.length == 0) {
        $scope.message = "Please enter data first";
        $scope.colorClass = "danger";
        $scope.textBorderClass = "error";
      }
      else if(dishes.length <= 3) {
        $scope.message = "Enjoy!";
        $scope.colorClass = "success";
        $scope.textBorderClass = "success";
      } else {
        $scope.message = "Too much!";
        $scope.colorClass = "success";
        $scope.textBorderClass = "success";
      }
    }

    function getDishesAsArray(stringDishes) {
      var arrayDishes = stringDishes.split(",").map(function (dishName) {
        return dishName.trim();
      });
      // Remove blank entries, only entries with text are counted
      var finalDishes = [];
      for(var dish of arrayDishes) {
        if(dish != null && dish != "") {
          finalDishes.push(dish);
        }
      }
      return finalDishes;
    }
  }
  LunchCheckController.$inject = ["$scope"];

})();
