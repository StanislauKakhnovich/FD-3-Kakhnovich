var NameShop = React.createClass({

    displayName: 'NameShop',
  
    propTypes: {
        name: React.PropTypes.string.isRequired,
    },
  
    render: function() {
      return React.DOM.caption( {className:'NameShop'}, this.props.name );
    },
  
  });