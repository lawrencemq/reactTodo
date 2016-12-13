var React = require('react');

var Search = React.createClass({

  propTypes: function(){
    return {
      handleSearch: React.PropTypes.func.isRequired
    };
  },

  onSubmit: function(e){
    e.preventDefault();

    var query = this.refs.searchTodo.value;
    if(query.length > 0){
      this.refs.searchTodo.value = '';
      this.props.handleSearch(query);
    }
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="searchTodo" placeholder="Search" />
        </form>
      </div>
    );
  }

});

module.exports = Search;
