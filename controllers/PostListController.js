function PostListController($scope) {

  $scope.titleList = [];

  $.getJSON('../posts/list.json', function(data) {
    $scope.$apply(function() {
      $scope.titleList = data.list;
    });
  });
  
}
