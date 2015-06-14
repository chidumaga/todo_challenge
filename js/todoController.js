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

  self.clearCompletedTasks = function(task){

    var index = -1

    for(var i=0; i<self.taskList.length; i++){
      if (self.taskList[i].done === true ){
        index = i;
        self.taskList.splice(index, 1);
        self.count -= 1;
      }
    }
  }

  self.submitForm = function(){
   var form = document.getElementsByName('myForm')[0];
   form.reset();
   return false;
  }

}]);