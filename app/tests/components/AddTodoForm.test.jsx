var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
var {AddTodoForm} = require('AddTodoForm');

describe('AddTodoForm', () => {
  it('should exist', () => {
    expect(AddTodoForm).toExist();
  });


  it('should dispatch ADD_TODO when valid task name entered', () => {
    const todoText = "walk corgi";
    const action = actions.startAddTodo(todoText);

    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodoForm));
    addTodoForm.refs.todoAction.value = action.text;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO if empty task entered', () => {
    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodoForm));
    addTodoForm.refs.todoAction.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

  it('should not dispatch ADD_TODO if blank task entered', () => {
    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodoForm));
    addTodoForm.refs.todoAction.value = '               ';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});
