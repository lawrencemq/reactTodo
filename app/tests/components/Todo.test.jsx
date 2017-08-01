var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var uuid = require('node-uuid');
var moment = require('moment');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
import {Todo} from 'Todo';

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  describe('render', () => {
    it('should render Todo to output', () => {
      var todoItem = {
        id: uuid(),
        text: 'hello',
        completed: false
      };
      var spy = expect.createSpy();
      var todo = TestUtils.renderIntoDocument(<Todo {...todoItem} dispatch={spy}/>);
      var $el = $(ReactDOM.findDOMNode(todo));
      var actualText = $el.find('.todo-text').text();
      expect(actualText).toBe(todoItem.text);
    });

    it('should render with checkbox checked if already completed', () => {
      var todoItems = {
        id: uuid(),
        text: 'hello',
        completed: true
      };
      var spy = expect.createSpy();
      var todo = TestUtils.renderIntoDocument(<Todo {...todoItems} dispatch={spy}/>);
      expect(todo.refs.isComplete.checked).toBe(true);
    });
  });


  it('should dispatch startToggleTodo on click', () => {
    var spy = expect.createSpy();
    var todoData = {
      id: '1',
      text: 'hello',
      completed: false,
      createdAt: moment.unix(0),
      completedAt: undefined
    };
    const action = actions.startToggleTodo(todoData.id, !todoData.completed);
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));
    var firstChild = $($el[0]).children()[0];

    TestUtils.Simulate.click(firstChild);
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch startDeleteTodo on x click', () => {
    const spy = expect.createSpy();
    const todoData = {
      id: '1',
      text: 'hello',
      completed: false,
      createdAt: moment.unix(0),
      completedAt: undefined
    };
    const action = actions.startDeleteTodo(todoData.id);

    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));
    var xMarker = $($el[0]).find('.delete-button');
    TestUtils.Simulate.click(xMarker[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });



});
