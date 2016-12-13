var React = require('react');
var uuid = require('node-uuid');

var Search = require('Search');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');

var TodoApp = React.createClass({

  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: []
    };
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
          completed: false
        }
      ]
    });
  },

  handleComplete: function(id, complete){
    var {todos} = this.state;
    const newTodoList = todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;
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
    });
  },

  render: function () {
    const todosToRender = this.findTodosToRender()
    return (
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          <h1 className="page-title">TodoApp</h1>
          <Search handleSearch={this.handleSearch}/>
          <TodoList todos={todosToRender} handleComplete={this.handleComplete}/>
          <AddTodoForm handleAdd={this.handleAddTodo} />
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
