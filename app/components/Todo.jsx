var React = require('react');

var Todo = React.createClass({

  propTypes: {
      id: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      completed: React.PropTypes.bool.isRequired,
      handleComplete: React.PropTypes.func.isRequired
  },

  markCompleted: function(){
    var {id, completed} = this.props;
    this.props.handleComplete(id, !completed);
  },

  render: function () {
    var {id, text, completed} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';

    return (
      <div className={todoClassName} onClick={() => {this.markCompleted();}}>
        <div>
          <input type="checkbox" ref="isComplete" checked={completed}/>
        </div>
        <div>
          <p className="todo-text">{text}</p>
          {/* <p className="todo__subtext">{renderDate()}</p> */}
        </div>
      </div>
    );
  }
});

module.exports = Todo;
