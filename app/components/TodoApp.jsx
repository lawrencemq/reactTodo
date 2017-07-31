import React from 'react';
import * as Redux from 'react-redux';
import Search from 'Search';
import TodoList from 'TodoList';
import AddTodoForm from 'AddTodoForm';
import * as actions from 'actions';

export var TodoApp = React.createClass({

  onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();
    dispatch(actions.startLogout());
  },

  render() {
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-4">
            <h1 className="page-title">TodoApp</h1>
            <div className="container">
              <Search />
              <TodoList />
              <AddTodoForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default Redux.connect()(TodoApp);
