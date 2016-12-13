var React = require('react');
var Search = require('Search');
var TodoList = require('TodoList');
var AddTodoForm = require('AddTodoForm');

var TodoApp = React.createClass({

  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: "Walk corgi"
        },
        {
          id: 2,
          text: "clean yard"
        },
        {
          id: 3,
          text: "buy groceries"
        },
        {
          id: 4,
          text: "Run!"
        }
      ]
    };
  },

  handleSearch: function(query){
    console.log('searching for query', query);
    //TODO
  },

  handleAddTodo: function(newTodoStr){
    var currentMaxId = Math.max.apply(Math, this.state.todos.map((todo) => {
      return todo.id;
    }));
    const newTodo = {
      id: currentMaxId + 1,
      text: newTodoStr
    };

    var newTodoList = this.state.todos.slice(0);
    newTodoList.push(newTodo);

    this.setState({
      todos: newTodoList
    });
  },

  render: function () {
    var {todos} = this.state;
    return (
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          <h1 className="page-title">TodoApp</h1>
          <Search handleSearch={this.handleSearch}/>
          <TodoList todos={todos}/>
          <AddTodoForm handleAdd={this.handleAddTodo} />
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
