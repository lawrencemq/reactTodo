var expect = require('expect');


var actions = require('actions');

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

  it('should generate toggleTodo', () => {
    var expectedAction = {
      type: 'TOGGLE_TODO',
      id: '12'
    };

    var responseActions = actions.toggleTodo('12');
    expect(responseActions).toEqual(expectedAction);
  });

  it('should generate addTodoAction', () => {
    var expectedAction = {
      type: 'ADD_TODO',
      text: 'walk corgi'
    };

    var responseActions = actions.addTodo('walk corgi')
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


});
