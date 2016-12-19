var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render a Todo for each todo item', () =>{
    var todoItems = [
      {
        id: '1',
        text: 'hello',
        completed: false
      },
      {
        id: '2',
        text: 'world',
        completed: false
      }
    ]
    var spy = expect.createSpy();
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todoItems} handleComplete={spy}/>);
    var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    expect(todoComponents.length).toBe(todoItems.length);
  });

  it('should call handleComplete if Todo triggers a handleComplete', () => {
    var todoItems = [
      {
        id: '1',
        text: 'hello',
        completed: false
      }
    ];
    var spy = expect.createSpy();
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todoItems} handleComplete={spy}/>);
    var todoComponent = TestUtils.findRenderedComponentWithType(todoList, Todo); // getting the first todo and marking it as complete
    todoComponent.markCompleted();

    expect(spy).toHaveBeenCalledWith('1', true);
  });

});
