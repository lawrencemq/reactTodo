var React = require('react');

var AddTodoForm = React.createClass({

  onSubmitNewTodo: function(e){
    e.preventDefault();
    var {handleAdd} = this.props;

    var todoValue = this.refs.todoAction.value;
    if(todoValue.length > 0){
      this.refs.todoAction.value = '';
      handleAdd(todoValue);
    }
  },

  render: function() {

    return (
      <div>
        <form onSubmit={this.onSubmitNewTodo}>
          <input type="text" ref="todoAction" placeholder="Add New Todo"/>
          <button className="button button-primary expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodoForm;
