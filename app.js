var app = angular.module('flapperNews', ['ui.router']);

app.config([
 '$stateProvider',
 '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      })
      .state('posts', {
      	url: '/posts{id}',
      	templateUrl: 'posts.html',
      	controller: 'PostsCtrl'
      });

    $urlRouterProvider.otherwise('home');
  }]);

app.factory('posts', [function () {
	var o = {
		posts: []
	};

	return o;
}]);

app.controller('PostsCtrl', [
	'$scope',
	'$scope.Params',
	'$posts', 
	function($scope, $stateParams, $posts){
	  $scope.addComment = function (){
	  	if($scope.body === '') { return; }
	  	$scope.post.comments.push({
	  		body: $scope.body,
	  		author: 'user',
	  		upvotes: 0
	  	});
	  	$scope.body = '';
	  }
}]);

app.controller('MainCtrl', [
	'$scope',
	'posts',
	function($scope, posts){
	  $scope.post = posts.post[$stateParams.id]
	  $scope.posts = posts.posts
	  $scope.addPost = function (){
	  	if(!$scope.title || $scope.title === '') { return; }
	  	$scope.posts.push({
	  		title: $scope.title, 
	  		upvotes: 0, 
	  		link: $scope.link,
	  		comments: [
	  		  {author: 'Joe', body: 'Cool post!', upvotes: 0},
	  		  {author: 'Bob', body: 'Lame post!', upvotes: 0}
	  		]
	  	});
	  };
	  $scope.incrementUpvotes = function(post){
	  	post.upvotes += 1;
	  };
}]);