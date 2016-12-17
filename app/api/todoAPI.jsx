var $ = require('jQuery');

module.exports = {
  setTodos: function(todos){
    if($.isArray(todos)){
        localStorage.setItem('todos', JSON.stringify(todos));
        return todos;
    }

  },
  getTodos: function(){
    const todosStr = localStorage.getItem('todos');
    var todos = [];

    try{
      todos = JSON.parse(todosStr)
    }catch(e){
      // just leave blank for now
    }

    return $.isArray(todos) ? todos : [];
  }
};
