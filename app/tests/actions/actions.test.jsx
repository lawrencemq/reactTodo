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

  it('should generate toggleTodoAsCompleted', () => {
    var expectedAction = {
      type: 'TOGGLE_TODO_AS_COMPLETED',
      todoId: '12'
    };

    var responseActions = actions.toggleTodoAsCompleted('12');
    expect(responseActions).toEqual(expectedAction);
  });

  it('should generate addTodoAction', () => {
    var expectedAction = {
      type: 'ADD_TODO',
      todoText: 'walk corgi'
    };

    var responseActions = actions.addTodo('walk corgi')
    expect(responseActions).toEqual(expectedAction);
  });


});
