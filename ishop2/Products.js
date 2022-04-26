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
          React.DOM.td({className:'Price'},this.props.price),
          React.DOM.td({className:'Quantity'},this.props.quantity),
          React.DOM.td(null,
          React.DOM.img({className:'ImgURL', src:this.props.imgURL}),
          ),
          React.DOM.td(null,
            React.DOM.input( {type:'button',value:'Удалить',className:'DeleteButton',onClick:this.vote} )
            ),
        );
  
    },
  
  });

  