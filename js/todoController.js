todoApp.controller('todo', [function(){

  var self = this;
  self.taskList = [];

  self.addTask = function(task){
    self.taskList.push(task);
  }

  self.deleteTask = function(task){

    var index = self.taskList.indexOf(task);
    self.taskList.splice(index, 1);

  }
}]);