var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({

  propTypes: function () {
    todos: React.PropTypes.array.isRequired
  },

  render: function () {
    var {todos} = this.props;

    var renderTodos = () => {
      return todos.map((todo) => {
        return (
          <Todo id={todo.id} {...todo}/>
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
