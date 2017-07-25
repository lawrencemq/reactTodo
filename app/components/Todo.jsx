var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');

var actions = require('actions');

export var Todo = React.createClass({

  render: function () {
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';

    var renderDate = () => {
      var message = completed ? 'Completed ' : 'Created ';
      var timestamp = completed ? completedAt : createdAt;
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div className={todoClassName} onClick={() => {
        dispatch(actions.startToggleTodo(id, !completed));
      }}>
        <div>
          <input type="checkbox" ref="isComplete" checked={completed}/>
        </div>
        <div>
          <p className="todo-text">{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
});

export default connect()(Todo);
