function PostController($scope) {
  
  $scope.name = '';
  $scope.body = '';

  $scope.$on('selectedPost2', function(event, args) {
    $getJSON('../posts' + args.ref, function(data){
      $scope.$apply(function() {
        console.log(data);
        $scope.name = data.title;
        $scope.body = data.body;
      });
    });
  });
  
}
