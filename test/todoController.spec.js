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

    expect(ctrl.taskList[0].task).toEqual('clean yard');
    expect(ctrl.taskList[1].task).toEqual('buy groceries');
  });

  it('maintains a count of the list of tasks', function(){

    ctrl.addTask('clean yard');
    ctrl.addTask('buy groceries');

    expect(ctrl.count).toEqual(2);
  });

  it('maintains a list of completed tasks', function(){

    ctrl.addTask('clean yard');
    ctrl.addTask('buy groceries');

    ctrl.markAsDone();

    expect(ctrl.completedCount).toEqual(1);
  })

})