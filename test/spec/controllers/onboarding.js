'use strict';

describe('Controller: OnboardingCtrl', function () {

  // load the controller's module
  beforeEach(module('dockstore.ui'));

  var OnboardingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OnboardingCtrl = $controller('OnboardingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OnboardingCtrl.awesomeThings.length).toBe(3);
  });
});
