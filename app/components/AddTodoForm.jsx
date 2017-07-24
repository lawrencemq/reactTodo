var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');

export var AddTodoForm = React.createClass({

  onSubmitNewTodo: function(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var todoValue = this.refs.todoAction.value.trim();

    if(todoValue.length > 0){
      this.refs.todoAction.value = '';
      dispatch(actions.startAddTodo(todoValue));
    }else{
      this.refs.todoAction.focus();
    }
  },

  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.onSubmitNewTodo}>
          <input type="text" ref="todoAction" placeholder="Add New Todo"/>
          <button className="button button-primary expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodoForm);
