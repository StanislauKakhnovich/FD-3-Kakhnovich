var Products = React.createClass({

    displayName: 'Products',
  
    propTypes: {
        nameProduct: React.PropTypes.string.isRequired,
        code: React.PropTypes.number.isRequired,
        price: React.PropTypes.number.isRequired,
        quantity: React.PropTypes.number.isRequired,
        imgURL: React.PropTypes.string.isRequired,
    },
  
    
  
    render: function() {
        return React.DOM.tr( {className:'Products'},
          React.DOM.td({className:'NameProduct'},this.props.nameProduct),
          React.DOM.td({className:'Text'},this.props.text)
        );
  
    },
  
  });