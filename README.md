# IonicStepperDirective

A simple stepper directive for Ionic Framework. Model and placeholder can be passed in from parent $scope. Model-binding is bi-directional.

1. Add Directive to your index.html. 
	* For example:
	``` <script src="js/directive/stepper.js"></script>``` 
2. Put stepper.html into your templates folder or wherever you like.
3. Update template path in stepper.js if you need to. 
3. Add directive to your app.js.
	* For example:
	``` angular.module('YourApp', [ 'ionic', 'stepper.directive' ])``` 
3. Add directive to your view. And pass your Values. Model-binding is bi-directional. 
	* Example:
	``` <stepper model="$scope.model" placeholder="$scope.placeholder"></stepper>``` 
4. If you like add contents of stepper.css to your style.css
