describe('simpsonsList', function() {

/*   // Load the module that contains the `simpsonsList` component before each test
  beforeEach(module('simpsonsList'));

  describe('SimpsonsListController', function() {

    it('should create a `simpsons` model with 5 simpsons', inject(function($componentController) {
      var ctrl = $componentController('simpsonsList');

      expect(ctrl.simpsons.length).toBe(5);
    }));

  });   */

  beforeEach(module('simpsonsList'));

  describe('controller', function() {
    var $httpBackend, ctrl;

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service and assign it to a variable with the same name
    // as the service while avoiding a name conflict.
    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('assets/data/simpsons.json')
                  .respond([{name: 'Homer'}, {name: 'Marge'}]);

      ctrl = $componentController('simpsonsList');
    }));

    it('should create a `simpsons` property with 2 simpsons fetched with `$http`', function() {
      expect(ctrl.simpsons).toBeUndefined();
    
      $httpBackend.flush();
      expect(ctrl.simpsons).toEqual([{name: 'Homer'}, {name: 'Marge'}]);
    });

  });

});