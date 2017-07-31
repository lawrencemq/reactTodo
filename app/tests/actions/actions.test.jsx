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

  it('should generate LOGOUT action', () => {
    const expectedResponse = {
      type: 'LOGOUT'
    };
    const response = actions.logout();
    expect(response).toEqual(expectedResponse);
  });

  it('should generate LOGIN action', () => {
    const expectedResponse = {
      type: 'LOGIN',
      uid: '123'
    };
    const response = actions.login(expectedResponse.uid);
    expect(response).toEqual(expectedResponse);
  });

  describe('Test with firebase todos', () => {
    var testTodoRef;
    var uid;
    var todosRef;

    beforeEach((done) => {
      firebase.auth().signInAnonymously().then((user) => {
        uid = user.uid;
        todosRef = firebaseRef.child(`users/${uid}/todos`);

        return todosRef.remove();
      }).then(() => {
        testTodoRef = todosRef.push();

        return testTodoRef.set({
          text: 'Something to do',
          completed: false,
          createdAt: 23453453
        });
      })
      .then(() => done())
      .catch(done);
    });

    afterEach((done) => {
      todosRef.remove().then(() => done());
    });
    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
        const store = createMockStore({auth: {uid}});
        const action = actions.startToggleTodo(testTodoRef.key, true);

        store.dispatch(action).then(() => {
          const mockActions = store.getActions();

          expect(mockActions[0]).toInclude({
            type: 'UPDATE_TODO',
            id: testTodoRef.key
          });
          expect(mockActions[0].updates).toInclude({
            completed: true
          });
          expect(mockActions[0].updates.completedAt).toExist();

          done();
        }, done);
      });

      it('should populate todos and dispatch ADD_TODOS', (done) => {
        const store = createMockStore({auth: {uid}});
        const action = actions.startAddTodos();

        store.dispatch(action).then(() => {
          const mockActions = store.getActions();

          expect(mockActions[0].type).toEqual('ADD_TODOS');
          expect(mockActions[0].todos.length).toEqual(1);
          expect(mockActions[0].todos[0].text).toEqual('Something to do');

          done();
        }, done)
      });

      it('should create todo and dispatch ADD_TODO', (done) => {
        const store = createMockStore({auth: {uid}});
        const todoText = 'My todo item';

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


  });



});
