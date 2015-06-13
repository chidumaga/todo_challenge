describe('todo_app', function(){

  beforeEach(module('todo'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('todo');
  }))

  it('initializes with an empty task list', function(){
    expect(ctrl.taskList).toEqual([]);
  });

  it('allows user store a list of tasks', function(){

    ctrl.addTask('clean yard');
    ctrl.addTask('buy groceries');

    expect(ctrl.taskList).toEqual(['clean yard', 'buy groceries']);
  });

})