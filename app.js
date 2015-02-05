var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
	'$scope',
	function($scope){
	  $scope.posts = [
		{title: 'post 1', upvotes: 5, link: 'stuff.com'},
		{title: 'post 2', upvotes: 2, link: 'stuff.com'},
		{title: 'post 3', upvotes: 4, link: 'stuff.com'},
		{title: 'post 4', upvotes: 9, link: 'stuff.com'}
		];
	  $scope.addPost = function (){
	  	if(!$scope.title || $scope.title === '') { return; }
	  	$scope.posts.push({
	  		title: $scope.title, 
	  		upvotes: 0, 
	  		link: $scope.link});
	  };
	  $scope.incrementUpvotes = function(post){
	  	post.upvotes += 1;
	  };

}]);