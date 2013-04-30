var postApp = angular.module('postApp', []);

function PostListController($scope) {

  $scope.titleList = [];
  
  $scope.retrieveList = function() {
    $.getJSON('../posts/list.json', function(data) {
      $scope.$apply(function() {
        $scope.titleList = data.list;
      });
    });
  }

  $scope.retrieveList();
  
}

function PostController($scope) {
  $scope.name = '';
  $scope.body = '';
  
  $scope.$on('postFromRoot', function(event, args) {
    $.getJSON('../posts/' + args.ref, function(data) {
      $scope.$apply(function() {
        console.log(data);
        $scope.name = data.title;
        $scope.body = data.body;
      });
    });
  });

}

function RootController($scope) {
  $scope.$on('postFromList', function(event, args) {
    console.log(args.ref);
    $scope.$broadcast('postFromRoot', args);
  });
}
