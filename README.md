# IonicStepperDirective

A simple stepper directive for Ionic Framework. Model and placeholder can be passed in from parent $scope. Model-binding is bi-directional.

1. Add Directive to your index.html. 
	* For example:
	``` <script src="directive/stepper.js"></script>``` 
2. Add Directive File to your app.js. Change template path if you need to. 
	* For example:
	``` angular.module('YourApp', [ 'ionic', 'stepper.directive' ])``` 
3. Add directive to your view. And pass your Values. Model-binding is bi-directional. 
	* Example:
	``` <stepper model="$scope.model" placeholder="$scope.placeholder"></stepper>``` 
4. If you like add contents of stepper.css to your style.css
