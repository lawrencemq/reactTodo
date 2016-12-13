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
      <div className="container__header">
        <div>
          <input type="text" ref="searchTodo" placeholder="Search" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            Show completed tasks
          </label>
        </div>
      </div>
    );
  }

});

module.exports = Search;
