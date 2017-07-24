import moment from 'moment';
import firebase, {firebaseRef} from "app/firebase/index";

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

// toggling individual
export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};

// add
export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    // create new to do item
    const todo = {
		text,
		completed: false,
		createdAt: moment().unix(),
		completedAt: null
	};

    // save it to firebase async
    const todoRef = firebaseRef.child('todos').push(todo);

    // update store
    return todoRef.then(() => {
      dispatch(addTodo({
              ...todo,
          id: todoRef.key
	  }));
    });
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};
