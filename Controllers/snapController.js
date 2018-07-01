angular
	.module('snapWeb')
	.controller("snapController", function($scope, snapFactory){ 
	 $scope.snaps = snapFactory.getSnaps();
});





