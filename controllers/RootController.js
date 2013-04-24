 function RootController($scope) {
   $scope.$on('selectedPost', function(event, args) {
     console.log(args.ref);
     $scope.$broadcast('selectedPost2', args);
   });
}
