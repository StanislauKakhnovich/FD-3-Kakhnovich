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
    )

  },

  render: function() {

    var productsCode=this.props.products.map( elem =>
        React.DOM.div({key:elem.code,className:'Product'},
          React.DOM.span({className:'Description-Product'},elem.quantity),
          React.DOM.img({className:'Description-Product', src:elem.imgURL}),
          React.DOM.span({className:'Description-Product'},elem.price),
          React.DOM.span({className:'Name'},elem.nameProduct),
        )
      );
    return React.DOM.table( {border: 1}, 
      React.createElement( NameShop, {name:this.props.name} ),
      React.createElement( HeadTable, {head:this.props.head} ),
      React.DOM.div( {className:'Products'}, productsCode ),
    );
  },

});