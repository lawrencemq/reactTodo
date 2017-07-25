var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {

  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'hello'
      };

      var response = reducers.searchTextReducer(df(''), df(action));
      expect(response).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var response = reducers.showCompletedReducer(df(false), df(action));
      expect(response).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
        const action = {
          type: 'ADD_TODO',
          todo: {
            id: 'abc123',
            text: "Something to do",
            completed: false,
            createdAt: 9382829
          }
        };

        const response = reducers.todosReducer(df([]), df(action));
        expect(response.length).toEqual(1);
        expect(response[0]).toEqual(action.todo);
    });

    it('should bulk add new todos', () => {
      const todos = [
        {
            id: '123',
            text: 'something',
            completed: false,
            createdAt: 123,
            completedAt: undefined
        },
        {
          id: '124',
          text: 'else',
          completed: true,
          createdAt: 124,
          completedAt: 125
        }
      ];
      const action = {
        type: 'ADD_TODOS',
        todos
      };
      var response = reducers.todosReducer(df([]), df(action));
      expect(response).toEqual(action.todos);

    });

    it('should update todo', () => {
      const todos = [
        {
          id: '123',
          text: 'something',
          completed: true,
          createdAt: 123,
          completedAt: 124
        }
      ];
      const updates = {
          completed: false,
          completedAt: null
      };
      const action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      const response = reducers.todosReducer(df(todos), df(action));
      expect(response.length).toEqual(1);
      expect(response[0].completed).toEqual(updates.completed);
      expect(response[0].completedAt).toEqual(updates.completedAt);
      expect(response[0].text).toEqual(todos[0].text);
    });

  });

});
