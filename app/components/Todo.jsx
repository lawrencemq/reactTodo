var React = require('react');
var moment = require('moment');

var Todo = React.createClass({

  propTypes: {
      id: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      completed: React.PropTypes.bool.isRequired,
      handleComplete: React.PropTypes.func.isRequired
      //completedAt: React.PropTypes.
  },

  markCompleted: function(){
    var {id, completed} = this.props;
    this.props.handleComplete(id, !completed);
  },

  render: function () {
    var {id, text, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';

    var renderDate = () => {
      var message = completed ? 'Completed ' : 'Created ';
      var timestamp = completed ? completedAt : createdAt;
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div className={todoClassName} onClick={() => {this.markCompleted();}}>
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

module.exports = Todo;
