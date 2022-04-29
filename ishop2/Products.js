var Products = React.createClass({

    displayName: 'Products',
  
    propTypes: {
      cbSelected: React.PropTypes.func.isRequired,
      selectedProductCode: React.PropTypes.number,
      selectedButtonDelete: React.PropTypes.bool,
      products: React.PropTypes.array.isRequired,
      products:React.PropTypes.arrayOf(
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
        if (EO.target.value !== 'Удалить') {
          return this.props.cbSelected(this.props.code);
        }
        
    },
    
    productDelete: function(EO) {
      this.props.cbDelete(this.props.code);
      if (this.props.selectedProductDelete===this.props.code) {
        var question = confirm(`Удалить ${this.props.selectedProductDelete} товар?`);
        question?delete this.props.products[this.props.selectedProductDelete-1]:null;
        
      }
    },
    
  
    render: function() {
        return React.DOM.tr( {className:'Products', 
        onClick:this.productClicked,
        style:{backgroundColor:(this.props.selectedProductCode===this.props.code)?'red':'transparent'},
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

  