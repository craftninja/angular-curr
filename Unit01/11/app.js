angular.module('redditClone', ['angularMoment'])
.controller('PostController', function ($scope) {
  $scope.newPost = {}
  $scope.addPost = function () {
    $scope.newPost.date = new Date()
    $scope.newPost.votes = 0
    $scope.newPost.comments = []
    $scope.posts.push($scope.newPost)
    $scope.newPost = {}
    $scope.showPostForm = false;
  }
  $scope.showPostForm = false;
  $scope.togglePostForm = function () {
    $scope.showPostForm = !$scope.showPostForm
  }

  $scope.toggleComments = function (post) {
    post.showComments = !post.showComments
  }
  $scope.toggleCommentForm = function (post) {
    post.showCommentForm = !post.showCommentForm
  }

  $scope.newComment = {};
  $scope.addComment = function (post) {
    post.comments.push($scope.newComment)
    $scope.newComment = {};
    post.showCommentForm = false;
    post.showComments = true;
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
      date: new Date(2016, 4, 4, 16, 26),
      comments: [
        {
          author: "Luke",
          content: "Oh my god that bunny is cuuuuuuute."
        },
        {
          author: "Jared",
          content: "Totes Cute!"
        },
      ]
    },
    {
      title: 'Silkie Bantams',
      author: 'Emily',
      image: 'http://i.imgur.com/1pZLbDi.jpg',
      description: 'Silkie Bantams... they are chickens!?!?!',
      votes: 0,
      date: new Date(2016, 4, 1, 11, 47),
      comments: []
    },
    {
      title: 'Water Bears',
      author: 'Luke',
      image: 'http://i.imgur.com/zrSL8XK.jpg',
      description: 'Ugh, WTF is that',
      votes: -3,
      date: new Date(2016, 4, 3, 19, 52),
      comments: []
    }
  ]

})
