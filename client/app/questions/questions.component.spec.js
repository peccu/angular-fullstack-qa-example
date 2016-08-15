'use strict';

describe('Component: QuestionsComponent', function() {
  // load the controller's module
  beforeEach(module('qaApp.questions'));

  var QuestionsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    QuestionsComponent = $componentController('questions', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
