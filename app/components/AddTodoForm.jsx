var React = require('react');

var AddTodoForm = React.createClass({

  propTypes: {
    handleAdd: React.PropTypes.func.isRequired
  },

  onSubmitNewTodo: function(e){
    e.preventDefault();
    var {handleAdd} = this.props;

    var todoValue = this.refs.todoAction.value.trim();
    if(todoValue.length > 0){
      this.refs.todoAction.value = '';
      handleAdd(todoValue);
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

module.exports = AddTodoForm;
