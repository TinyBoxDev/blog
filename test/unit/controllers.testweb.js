describe('Controllers functions', function() {

  beforeEach(angular.mock.module('postApp'));
  
  describe('PostListController', function() {
    var scope;
    var ctrlScope;

    beforeEach(angular.mock.inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrlScope = $controller(PostListController, {$scope: scope});
    }));
  
    it('Should create post list whit empty name and body', function() {
      expect(scope.titleList.length).toBe(0);
    });

    it('Should read 2 elements from non-empty list', function() {
      scope.retrieveList();
      waits(500);
      runs(function() {
        console.log(scope.titleList);
        expect(scope.titleList.length).toBe(2);
      });
    });
    
  });

  describe('PostController', function() {
    var scope;
    var ctrlScope;
    
    beforeEach(angular.mock.inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrlScope = $controller(PostController, {$scope: scope});
    }));
    
    it('Should create a post with empty name', function() {
      expect(scope.name.length).toBe(0);
    });
    
    it('Should create a post with empty body', function() {
      expect(scope.body.length).toBe(0);
    });

  });
});
