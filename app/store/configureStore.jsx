var redux = require('redux');
var thunk = require('redux-thunk').default;
//add reducer imports here

export var configure = () => {
  var reducer = redux.combineReducers({
    // add reducers here
  });

  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtention ? window.devToolsExtension() : f => f
  ));

  return store;
};
