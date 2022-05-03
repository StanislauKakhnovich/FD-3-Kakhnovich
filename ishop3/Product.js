var Product = React.createClass({

    displayName: 'Product',
  
    propTypes: {
      isSelected: React.PropTypes.bool.isRequired,
      cbSelected: React.PropTypes.func.isRequired,
      selectedProductCode: React.PropTypes.number,
      workListProducts: React.PropTypes.array.isRequired,
      workListProducts:React.PropTypes.arrayOf(
      React.PropTypes.shape({
        nameProduct: React.PropTypes.string.isRequired,
        code: React.PropTypes.number.isRequired,
        price: React.PropTypes.number.isRequired,
        quantity: React.PropTypes.number.isRequired,
        imgURL: React.PropTypes.string.isRequired,
      })
    ),
        
    },

    productClicked: function(EO) {
      if (this.props.cbSelected)  this.props.cbSelected(this.props.code);
    },
    
    productDelete: function(EO) {
      EO.stopPropagation();
      if (this.props.cbDelete) this.props.cbDelete(this.props.code);
    },
    
  
    render: function() {
        return React.DOM.tr( {className:'Product', 
        className: this.props.isSelected ? 'Selected' : 'Unselected',
        onClick:this.productClicked,
        },
          React.DOM.td({className:'NameProduct'},this.props.nameProduct),
          React.DOM.td({className:'Price'},this.props.price),
          React.DOM.td({className:'Quantity'},this.props.quantity),
          React.DOM.td(null,
          React.DOM.img({className:'ImgURL', src:this.props.imgURL}),
          ),
          React.DOM.td(null,
            React.DOM.input( {type:'button',value:'Удалить',className:'DeleteButton',onClick:this.productDelete,} )
            ),
        );
  
    },
  
  });
