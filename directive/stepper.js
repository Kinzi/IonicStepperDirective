'use strict';
angular.module('stepper.directive', [])

.directive('stepper', function () {
    return {
		restrict: 'E',
		replace: true,
		templateUrl: 'stepper.html',
		scope: {
	      model: "=model",
	      placeholder: "=placeholder"
	    }
    };
});
