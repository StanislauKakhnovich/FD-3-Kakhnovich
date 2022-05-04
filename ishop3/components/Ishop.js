var React = require('react');

require('./Ishop.css');

var NameShop = require('./NameShop');
var HeadTable = require('./HeadTable');
var Product = require('./Product');


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
      workListProducts: this.props.products,
      isSelected: false,
    };
  },

  productSelected: function(code) {  
    this.setState( {selectedProductCode:code} );
  },

  productDelete: function(code) {  
    var question = confirm(`Удалить ${code} товар?`);
    if (question) this.setState( {workListProducts: this.state.workListProducts.filter(elem => elem.code !== code)} );
  },

  render: function() {

    var productsCode=this.state.workListProducts.map( elem =>
      React.createElement(Product, {key: elem.code,
        code: elem.code,
        nameProduct: elem.nameProduct,
        price: elem.price,
        quantity: elem.quantity,
        imgURL: elem.imgURL,
        cbSelected:this.productSelected,
        cbDelete:this.productDelete,
        selectedProductCode:this.state.selectedProductCode,
        selectedProductDelete:this.state.selectedProductDelete,
        products: this.state.workListProducts,
        isSelected: (this.state.selectedProductCode === elem.code),
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

module.exports = Ishop;