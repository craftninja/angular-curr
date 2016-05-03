angular.module('redditClone', [])
.controller('PostController', function ($scope) {
  $scope.newPost = {}
  $scope.addPost = function () {
    $scope.newPost.data = new Date()
    $scope.newPost.votes = 0
    $scope.newPost.comments = []
    $scope.posts.push($scope.newPost)
    $scope.newPost = {}
    $scope.showForm = false;
  }
  $scope.showForm = false;
  $scope.toggleForm = function () {
    $scope.showForm = !$scope.showForm
  }
  $scope.pluralize = function (number, word) {
    return number == 1 ? word : word + 's';
  };
  $scope.upvote = function (post) {
    post.votes += 1
  }
  $scope.downvote = function (post) {
    post.votes -= 1
  }
  $scope.order = 'votes'
  $scope.reverse = function() {
    if ($scope.order == 'votes' || $scope.order == 'date') {
      return true;
    } else {
      return false;
    };
  };
  $scope.posts = [
    {
      title: 'Angora Bunny',
      author: 'Emily',
      image: 'http://i.imgur.com/pcK1WSw.jpg',
      description: 'Angora bunnies are awesome!',
      votes: 4,
      date: new Date(2016, 03, 02),
      comments: []
    },
    {
      title: 'Silkie Bantams',
      author: 'Emily',
      image: 'http://i.imgur.com/1pZLbDi.jpg',
      description: 'Silkie Bantams... they are chickens!?!?!',
      votes: 0,
      date: new Date(2016, 01, 03),
      comments: []
    },
    {
      title: 'Water Bears',
      author: 'Luke',
      image: 'http://i.imgur.com/zrSL8XK.jpg',
      description: 'Ugh, WTF is that',
      votes: -3,
      date: new Date(2016, 02, 17),
      comments: []
    }
  ]

})
