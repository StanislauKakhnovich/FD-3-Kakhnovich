var Ishop = React.createClass({

  displayName: 'Ishop',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    prosucts: React.PropTypes.array.isRequired,
  
    prosucts:React.PropTypes.arrayOf(
      React.PropTypes.shape({
        nameProduct: React.PropTypes.string.isRequired,
        code: React.PropTypes.number.isRequired,
        price: React.PropTypes.number.isRequired,
        imgURL: React.PropTypes.string.isRequired,
        quantity: React.PropTypes.number.isRequired,
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
    return React.DOM.div( {className:'Ishop'}, 
      React.DOM.div( {className:'Question'}, this.props.name ),
      React.DOM.div( {className:'Products'}, productsCode ),
    );
  },

});