import React from 'react';
var moment = require('moment');
var {connect} = require('react-redux');

import * as actions from 'actions';

export var Todo = React.createClass({

  render() {
    const {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    const todoClassName = completed ? 'todo todo-completed row' : 'todo row';

    var renderDate = () => {
      const message = completed ? 'Completed ' : 'Created ';
      const timestamp = completed ? completedAt : createdAt;
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
        <div className={todoClassName}>
          <div className='column small-1' onClick={() => {dispatch(actions.startToggleTodo(id, !completed));}}>
            <input type="checkbox" ref="isComplete" checked={completed}/>
          </div>
          <div className='column small-9' onClick={() => {dispatch(actions.startToggleTodo(id, !completed));}}>
            <p className="todo-text">{text}</p>
            <p className="todo__subtext">{renderDate()}</p>
          </div>
          <div className="delete-button column small-2" onClick={() => { dispatch(actions.startDeleteTodo(id));}}>
            <p>X</p>
          </div>
        </div>
    );
  }
});

export default connect()(Todo);
