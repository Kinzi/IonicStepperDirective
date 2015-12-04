# IonicStepperDirective

1. Add Directive to your index.html. For example:
	<script src="directive/stepper.js"></script>
2. Add Directive File to your app.js. For example:
	angular.module('YourApp', [ 'ionic', 'stepper.directive' ])
3. Add directive to your view. And pass your Values. Model-binding is bi-directional. Example:
	<stepper model="$scope.model" placeholder="$scope.placeholder"></stepper>
