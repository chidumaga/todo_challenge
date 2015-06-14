todoApp.controller('todo', [function(){

  var self = this;
  self.taskList = [];
  self.count = 0;
  self.completedCount = 0;

  self.addTask = function(task){
    self.taskList.push({"task": task, "done": false});
    self.count += 1;
  }

  self.markAsDone = function(){
    self.completedCount += 1;
    self.count -= 1;
  }

}]);