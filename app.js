var app = angular.module("myApp", ["ngMessages"])

app.controller("myController", function($scope){
	
	$scope.mealPrice = 0;
	$scope.taxRate = 0;
	$scope.tipPct = 0;
	$scope.subTotal = 0;
	$scope.tip = 0;
	$scope.tipTotal = 0;
	$scope.mealCount = 0;
	$scope.avTip = 0;

	$scope.submit = function() {

		if($scope.myForm.$valid) {

			$scope.subTotal = $scope.mealPrice * (1 + $scope.taxRate/100);
			$scope.tip = $scope.subTotal * ($scope.tipPct/100);
			$scope.tipTotal += $scope.tip;
			$scope.mealCount += 1;
			$scope.avTip = $scope.tipTotal / $scope.mealCount;
		};
	}

	$scope.cancel = function() {
		$scope.mealPrice = 0;
		$scope.taxRate = 0;
		$scope.tipPct = 0;
	}

	$scope.reset = function() {
		$scope.mealPrice = 0;
		$scope.taxRate = 0;
		$scope.tipPct = 0;
		$scope.subTotal = 0;
		$scope.tip = 0;
		$scope.tipTotal = 0;
		$scope.mealCount = 0;
		$scope.avTip = 0;
	}

});