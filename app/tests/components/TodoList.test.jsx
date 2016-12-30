var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');

import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';
import {configure} from 'configureStore';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render a message for no todos if there are none given', () => {
    var spy = expect.createSpy();
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={[]} />);

    var $el = $(ReactDOM.findDOMNode(todoList));
    expect($el.find('.container__message').length).toBe(1);
    expect($el.find('.container__message').text()).toBe('Nothing To Do');
  });

  it('should render a Todo for each todo item', () =>{
    var todoItems = [
      {
        id: '1',
        text: 'hello',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      },
      {
        id: '2',
        text: 'world',
        completed: false,
        completedAt: undefined,
        createdAt: 401
      }
    ]

    var store = configure({
      todos: todoItems
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList />
      </Provider>
    );

    var spy = expect.createSpy();
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
    expect(todoComponents.length).toBe(todoItems.length);
  });

});
