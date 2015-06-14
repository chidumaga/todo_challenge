describe('todoApp', function(){

  var inputTask = element(by.model('todo.taskToAdd'));
  var addTask = element(by.className('btn'));

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  it('has a text box for adding tasks', function(){

    expect(inputTask).toBeDefined();

  });

  it('allow users add tasks', function(){

    inputTask.sendKeys('feed the horse');
    addTask.click();

    var child = element(by.css('.done-false')).
    element(by.binding('todo.task'));

    expect(child.getText()).toEqual('feed the horse');
  });

  it('allows users mark tasks as done', function(){

    inputTask.sendKeys('drown the fish');
    addTask.click();

    element(by.className('chbx')).click();

    expect(element(by.css('.done-true'))).toBeTruthy();

  });

  it('allows users filter active tasks', function(){

    inputTask.sendKeys('shear the sheep');
    addTask.click();
    inputTask.sendKeys('resurrect the donkey');
    addTask.click();

    element(by.className('chbx')).click();

    element(by.id('active')).click();

    //expect(element(by.binding('todo.task')).getText()).toEqual('resurrect the donkey');

  });

  it('allows users filter completed tasks', function(){

    inputTask.sendKeys('shear the sheep');
    addTask.click();
    inputTask.sendKeys('resurrect the donkey');
    addTask.click();

    element(by.className('chbx')).click();

    element(by.id('completed')).click();

    //expect(element(by.binding('todo.task')).getText()).toEqual('shear the sheep');

  });

  it('allows users filter all tasks', function(){

    inputTask.sendKeys('shear the sheep');
    addTask.click();
    inputTask.sendKeys('resurrect the donkey');
    addTask.click();

    element(by.className('chbx')).click();

    element(by.id('all')).click();

    //expect(element(by.repeater('todo.task')).getText()).toContain('shear the sheep');
    //expect(element(by.repeater('todo.task')).getText()).toContain('resurrect the donkey');

  });

  it('displays the number of active tasks', function(){

    inputTask.sendKeys('swim with the eels');
    addTask.click();
    inputTask.sendKeys('race the turtle');
    addTask.click();

    expect(element(by.binding('todo.count')).getText()).toEqual('Task count: 2');
  });

  it('displays the number of completed tasks', function(){

    inputTask.sendKeys('swim with the eels');
    addTask.click();
    inputTask.sendKeys('race the turtle');
    addTask.click();

    element(by.className('chbx')).click();

    expect(element(by.binding('todo.completedCount')).getText()).toEqual('Completed tasks: 1');
  })

})