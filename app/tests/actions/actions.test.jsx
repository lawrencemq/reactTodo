import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

var expect = require('expect');

import firebase, {firebaseRef} from "app/firebase/";

var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {

  it('should generate searchTextAction', () => {
    var expectedAction = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'run'
    };

    var responseActions = actions.setSearchText('run');
    expect(responseActions).toEqual(expectedAction);
  });

  it('should generate toggleShowCompletedAction', () => {
    var expectedAction = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    var responseActions = actions.toggleShowCompleted();
    expect(responseActions).toEqual(expectedAction);
  });

  it('should generate update todo action', () => {
    const expectedAction = {
      type: 'UPDATE_TODO',
      id: '12',
      updates: {
        completed: false,
      }
    };

    var responseActions = actions.updateTodo(expectedAction.id, expectedAction.updates);
    expect(responseActions).toEqual(expectedAction);
  });

  it('should generate addTodoAction', () => {
    const expectedAction = {
      type: 'ADD_TODO',
      todo: {
          id: '232',
          text: "walk 3 corgis",
          completed: false,
          createdAt: 121
      }
    };

    const responseActions = actions.addTodo(expectedAction.todo)
    expect(responseActions).toEqual(expectedAction);
  });

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = "My todo item";
    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
          type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
          text: todoText
      });
      done();
    }).catch(done);
  });

  it('should generate addTodos action', () => {
    var todos = [{
      id: '111',
      text: 'anything',
      created: 2300,
      completed: false,
      completedAt: undefined
    }]
    var expectedAction = {
      type: 'ADD_TODOS',
      todos
    };
    var response = actions.addTodos(todos);
    expect(response).toEqual(expectedAction);
  });

  describe('Test with firebase todos', () => {
    var testTodoRef;

    beforeEach((done) => {
      testTodoRef = firebaseRef.child('todos').push();
      testTodoRef.set({
         text: "Someting to do",
         completed: false,
         createdAt: 23232
      }).then(()=> done());
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);
      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        expect(mockActions[0]).toInclude({
            type: 'UPDATE_TODO',
            id: testTodoRef.key,
        });
        expect(mockActions[0].updates).toInclude({
            completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }, done)
    });
  });

});
