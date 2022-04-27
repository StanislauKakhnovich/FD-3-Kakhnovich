var Ishop = React.createClass({

  displayName: 'Ishop',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    head: React.PropTypes.object.isRequired,
    head:  React.PropTypes.shape({
      headNameProduct: React.PropTypes.string.isRequired,
      headPrice: React.PropTypes.string.isRequired,
      headImg: React.PropTypes.string.isRequired,
      headQuantity: React.PropTypes.string.isRequired,
      headControl: React.PropTypes.string.isRequired,
    }),

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

  getInitialState: function() {
    return { 
      selectedProductCode: null,
      selectedProductDelete: null,
      selectedButtonDelete: null,
    };
  },

  productSelected: function(code, buttonSelection) {  
    this.setState( {selectedProductCode:code} );
    this.setState( {selectedProductDelete:code} );
    this.setState( {selectedButtonDelete:buttonSelection} );
  },

  render: function() {

    var productsCode=this.props.products.map( elem =>
      React.createElement(Products, {key: elem.code,
        code: elem.code,
        nameProduct: elem.nameProduct,
        price: elem.price,
        quantity: elem.quantity,
        imgURL: elem.imgURL,
        cbSelected:this.productSelected,
        selectedProductCode:this.state.selectedProductCode,
        selectedButtonDelete:this.state.selectedButtonDelete,
        selectedProductDelete:this.state.selectedProductDelete,
        products: this.props.products,
        control: this.props.control,
        

      })
      );

    return React.DOM.table( {className:'Ishop'}, 
      React.createElement( NameShop, {name:this.props.name} ),
      React.createElement( HeadTable, {headNameProduct: this.props.head.headNameProduct,
        headPrice: this.props.head.headPrice,
        headImg: this.props.head.headImg,
        headQuantity: this.props.head.headQuantity,
        headControl: this.props.head.headControl,
      } ),
      React.DOM.tbody( {className:'Products'}, productsCode ),
    );
  },

});