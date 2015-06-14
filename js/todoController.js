todoApp.controller('todo', [function(){

  var self = this;
  self.taskList = [];
  self.doneTasks = [];

  self.addTask = function(task){
    self.taskList.push({"task": task, "done": false});
  }
}]);