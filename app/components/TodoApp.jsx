var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var Search = require('Search');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({

  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },

  componentDidUpdate: function(){
    TodoAPI.setTodos(this.state.todos);
  },

  handleSearch: function(query, showCompleted){
    this.setState({
      showCompleted: showCompleted,
      searchText: query.toLowerCase()
    });
  },

  handleAddTodo: function(newTodoStr){
    const {todos} = this.state;
    this.setState({
      todos: [
        ...todos,
        {
          id: uuid(),
          text: newTodoStr,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },

  handleComplete: function(id, complete){
    var {todos} = this.state;
    const newTodoList = todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });

    this.setState({
      todos: newTodoList
    })
  },

  findTodosToRender: function () {
    var {showCompleted, searchText} = this.state;
    return this.state.todos.filter((todo) => {
      return todo.text.toLowerCase().startsWith(searchText)
    }).filter((todo) => {
      return showCompleted || !todo.completed
    }).sort((a, b) => {
      if(!a.completed && b.completed){
        return -1;
      }else if(a.completed && !b.completed){
        return 1;
      }else{
        return 0;
      }
    });
  },

  render: function () {
    const todosToRender = this.findTodosToRender()
    return (
      <div className="row">
        <div className="column small-centered small-11 medium-6 large-4">
          <h1 className="page-title">TodoApp</h1>
          <div className="container">
            <Search handleSearch={this.handleSearch}/>
            <TodoList todos={todosToRender} handleComplete={this.handleComplete}/>
            <AddTodoForm handleAdd={this.handleAddTodo} />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
