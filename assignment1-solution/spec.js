(function () {
  "use strict";

  describe("LunchCheckController", function () {
    beforeEach(module("LunchCheck"));

    var $controller;

    beforeEach(inject(function (_$controller_) {
      $controller = _$controller_;
    }));

    describe("$scope.checkIfTooMuch", function () {
      var $scope, controller;

      beforeEach(function () {
        $scope = {};
        controller = $controller("LunchCheckController", {
          $scope: $scope
        });
      });

      it("shows an error if no data entered", function () {
        $scope.dishes = "";
        $scope.checkIfTooMuch();
        expect($scope.message).toEqual("Please enter data first");
      });

      it("shows enjoy when up to 3 items entered", function () {
        $scope.dishes = "salad, water";
        $scope.checkIfTooMuch();
        expect($scope.message).toEqual("Enjoy!");
      });

      it("shows too much when more than 3 items entered", function () {
        $scope.dishes = "cake, soda, fries, cigar";
        $scope.checkIfTooMuch();
        expect($scope.message).toEqual("Too much!");
      });

      it("shows green font color if data entered", function () {
        $scope.dishes = "salad, water";
        $scope.checkIfTooMuch();
        expect($scope.colorClass).toEqual("success");
      });

      it("shows red font color if no data entered", function () {
        $scope.dishes = "";
        $scope.checkIfTooMuch();
        expect($scope.colorClass).toEqual("danger");
      });

      it("shows green border color if data entered", function () {
        $scope.dishes = "salad, water";
        $scope.checkIfTooMuch();
        expect($scope.textBorderClass).toEqual("success");
      });

      it("shows red border color if no data entered", function () {
        $scope.dishes = "";
        $scope.checkIfTooMuch();
        expect($scope.textBorderClass).toEqual("error");
      });

      it("ignores empty dishes", function () {
        $scope.dishes = ",";
        $scope.checkIfTooMuch();
        expect($scope.message).toEqual("Please enter data first");
      });

      it("ignores empty dish at beginning", function () {
        $scope.dishes = ", apples, oranges, bananas";
        $scope.checkIfTooMuch();
        expect($scope.message).toEqual("Enjoy!");
      });

      it("ignores empty dish at end", function () {
        $scope.dishes = "apples, oranges, bananas, "
        $scope.checkIfTooMuch();
        expect($scope.message).toEqual("Enjoy!");
      });
    });
  });
})();
