var React = require('react');

require('./HeadTable.css');

var HeadTable = React.createClass({

  displayName: 'HeadTable',

  propTypes: {
      headNameProduct: React.PropTypes.string.isRequired,
      headPrice: React.PropTypes.string.isRequired,
      headImg: React.PropTypes.string.isRequired,
      headQuantity: React.PropTypes.string.isRequired,
      headControl: React.PropTypes.string.isRequired,
  },

  render: function() {
    return React.DOM.thead( {className:'HeadTable'}, 
      React.DOM.tr(null,
        React.DOM.th({className:'HeadNameProduct'},this.props.headNameProduct),
        React.DOM.th({className:'HeadPrice'},this.props.headPrice),
        React.DOM.th({className:'HeadQuantity'},this.props.headQuantity),
        React.DOM.th({className:'HeadImg'},this.props.headImg),
        React.DOM.th({className:'HeadControl'},this.props.headControl),
        )
      
    );
  },
});

module.exports = HeadTable;