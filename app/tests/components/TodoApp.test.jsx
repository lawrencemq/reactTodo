var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var uuid = require('node-uuid');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {

  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  describe('handleComplete', () => {

    it('should mark the appropriate todo task completed', () => {
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
      ];

      var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
      todoApp.setState({
        todos: todoItems
      });

      todoApp.handleComplete('2', true);
      expect(todoApp.state.todos[1].completed).toBe(true);

      todoApp.handleComplete('2', false);
      expect(todoApp.state.todos[1].completed).toBe(false);


    });

  });

  describe('handleAddTodo', () => {

    it('should add task to empty todo list', () => {
      var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
      const todoStr = "Feed fishes";
      todoApp.handleAddTodo(todoStr);

      expect(todoApp.state.todos.length).toBe(1);
      expect(todoApp.state.todos[0].text).toBe(todoStr);
    });

    it('should add a task with a different id to a todo list', () => {
      var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
      todoApp.setState({
        todos: [
          {
            id: uuid(),
            text: 'hello',
            completed: false
          }
        ]
      });

      const todoStr = "Feed fishes";
      todoApp.handleAddTodo(todoStr);

      expect(todoApp.state.todos.length).toBe(2);
      expect(todoApp.state.todos[0].id).toNotBe(todoApp.state.todos[1].id);
    });
  });

  describe('handleSearch', () => {


    it('should update the searchText and completness of tasks', () => {
      const searchStr = 'goose';
      var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

      todoApp.handleSearch(searchStr, true);
      expect(todoApp.state.searchText).toBe(searchStr);
      expect(todoApp.state.showCompleted).toBe(true);
    });

  });

  describe('findTodosToRender', () => {
    var todoItems = [
      {
        id: '1',
        text: 'Hello',
        completed: false
      },
      {
        id: '2',
        text: 'world',
        completed: true
      },
      {
        id: '3',
        text: 'from bender',
        completed: false
      }
    ];
    it('should filter tasks based on the starting query string', () => {
      const searchStr = 'h';
      var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
      todoApp.setState({
        todos: todoItems
      });
      todoApp.handleSearch(searchStr, false);

      const returnedList = todoApp.findTodosToRender();
      expect(returnedList.length).toBe(1);
      expect(returnedList[0].id).toBe('1');
    });

    it('should filter out completed tasks by default', () => {
      var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
      todoApp.setState({
        todos: todoItems
      });

      const returnedList = todoApp.findTodosToRender();
      expect(returnedList.length).toBe(2);

      returnedList.forEach((todo) => {
        expect(todo.completed).toBe(false);
      });

    });

    it('should not filter out completed tasks if asked not to', () => {
      var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
      todoApp.setState({
        todos: todoItems
      });
      todoApp.handleSearch('', true);

      const returnedList = todoApp.findTodosToRender();
      expect(returnedList.length).toBe(3);

    });

    it('should sort non-completed first', () => {
      var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
      todoApp.setState({
        todos: todoItems,
        showCompleted: true
      });

      const returnedList = todoApp.findTodosToRender();
      expect(returnedList.length).toBe(3);
      expect(returnedList[0].completed).toBe(false);
      expect(returnedList[1].completed).toBe(false);
      expect(returnedList[2].completed).toBe(true);
    });

  });

});
