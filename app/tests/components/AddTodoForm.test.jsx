var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodoForm = require('AddTodoForm');

describe('AddTodoForm', () => {
  it('should exist', () => {
    expect(AddTodoForm).toExist();
  });


  it('should call handleAdd if valid task name entered', () => {
    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm handleAdd={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodoForm));
    addTodoForm.refs.todoAction.value = 'walk corgi';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('walk corgi');
  });

  it('should not call handleAdd if empty task entered', () => {
    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm handleAdd={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodoForm));
    addTodoForm.refs.todoAction.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

  it('should not call handleAdd if blank task entered', () => {
    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm handleAdd={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodoForm));
    addTodoForm.refs.todoAction.value = '               ';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});
