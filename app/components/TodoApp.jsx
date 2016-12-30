var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import Search from 'Search';
import TodoList from 'TodoList';
import AddTodoForm from 'AddTodoForm';

var TodoApp = React.createClass({

  render: function () {
    return (
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
    )
  }
});

module.exports = TodoApp;
