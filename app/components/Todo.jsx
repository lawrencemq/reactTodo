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

    return (
      <div onClick={() => {this.markCompleted();}}>
        <input type="checkbox" ref="isComplete" checked={completed}/>
        <span className="todo-text">
          {text}
        </span>
      </div>
    );
  }
});

module.exports = Todo;
