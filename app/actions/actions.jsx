// set search text
export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

// toggle show completed
export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
};

// toggling individual todo
export var toggleTodoAsCompleted = (todoId) => {
  return {
    type: 'TOGGLE_TODO_AS_COMPLETED',
    todoId
  }
};

// add todo
export var addTodo = (todoText) => {
  return {
    type: 'ADD_TODO',
    todoText
  };
};
