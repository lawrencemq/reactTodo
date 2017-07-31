import moment from 'moment';
import firebase, {firebaseRef, githubProvider} from "app/firebase/index";

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
export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  }
};

export var startToggleTodo = (id, completed) => {
	return (dispatch, getState) => {
		const todoRef = firebaseRef.child(`todos/${id}`);
		const updates = {
			completed,
			completedAt: completed ? moment().unix() : null
		};

		return todoRef.update(updates).then(() => {
			dispatch(updateTodo(id, updates));
		});
	};
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

export var startAddTodos = () => {
	return (dispatch, getState) => {
		var todosRef = firebaseRef.child('todos');

		return todosRef.once('value').then((snapshot) => {
			var todos = snapshot.val() || {};
			var parsedTodos = [];

			Object.keys(todos).forEach((todoId) => {
				parsedTodos.push({
					id: todoId,
					...todos[todoId]
				});
			});

			dispatch(addTodos(parsedTodos));
		});
	};
};

export var startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log('Auth worked', result);
    }, (error) => {
      console.log("Error with auth", error);
    });
  };
};

export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('logged out');
    });
  };
};

export var login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  };
};

export var logout = () => {
  return {
    type: 'LOGOUT'
  };
};
