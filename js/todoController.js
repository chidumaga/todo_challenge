todoApp.controller('todo', [function(){

  var self = this;
  self.taskList = [];

  self.addTask = function(task){
    self.taskList.push(task);
  }
}]);