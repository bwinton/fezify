'use strict';

describe('Directive: fezish', function () {

  // load the directive's module
  beforeEach(module('fezifyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fezish class="big" ng-model="plaintext"></fezish>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('');
  }));
});
