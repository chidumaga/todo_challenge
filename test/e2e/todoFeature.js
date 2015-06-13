describe('todoApp', function(){

  var searchBox = element(by.model('todo.taskToAdd'))

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  it('has a text box for adding tasks', function(){

    expect(searchBox).toBeDefined();

  });

  it('can allow users add tasks', function(){

    searchBox.sendKeys('feed the horse');
    element(by.className('btn')).click();

    expect(element(by.binding('task')).getText()).toEqual('feed the horse');

  })

})