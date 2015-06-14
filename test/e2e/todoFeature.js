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
    element(by.repeater('todo.task'));

    expect(child.getText()).toEqual('feed the horse');
  });

  it('allows users mark tasks as done', function(){

    inputTask.sendKeys('drown the fish');
    addTask.click();

    element(by.className('chbx')).click();

    expect(element(by.css('.done-true'))).toBeTruthy();

  });

})