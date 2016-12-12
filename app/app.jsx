var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


// Load foundation
$(document).foundation();

// Application style
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    {/* <Route path="/" component={Main}> */}
      {/* <Route path="countdown" component={Countdown}/> */}
      {/* <IndexRoute component={Timer}/> */}
    {/* </Route> */}
  </Router>,
  document.getElementById('app')
);
