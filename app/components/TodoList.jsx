var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({

  propTypes:{
    todos: React.PropTypes.array.isRequired,
    handleComplete: React.PropTypes.func.isRequired

  },

  render: function () {
    var {todos} = this.props;

    var renderTodos = () => {
     if (todos.length === 0) {
       return (
         <p className="container__message">Nothing To Do</p>
       );
     }

     return todos.map((todo) => {
       return (
         <Todo key={todo.id} {...todo} handleComplete={this.props.handleComplete}/>
       );
     });
   };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
