var React = require('react');

var Todo = React.createClass({

  propTypes: function(){
    return {
      id: React.PropTypes.number.required,
      text: React.PropTypes.string.required
    };
  },

  render: function () {
    var {id, text} = this.props;
    return (
      <div>
        {id} {text}
      </div>
    );
  }
});

module.exports = Todo;
