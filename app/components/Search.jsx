var React = require('react');

var Search = React.createClass({

  propTypes: function(){
    return {
      handleSearch: React.PropTypes.func.isRequired
    };
  },

  handleSearch: function(){
    var showCompleted = this.refs.showCompleted.checked;
    var query = this.refs.searchTodo.value.trim();

    this.props.handleSearch(query, showCompleted);
  },

  render: function() {
    return (
      <div>
        <div>
          <input type="text" ref="searchTodo" placeholder="Search" onChange={this.handleSearch}/>
        </div>
        <div>
          <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
          Show completed tasks
        </div>
      </div>
    );
  }

});

module.exports = Search;
