var Main = React.createClass({

  displayName: 'Main',

  propTypes: {
    words: React.PropTypes.array.isRequired,
    words:React.PropTypes.arrayOf(
      React.PropTypes.string.isRequired,
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

    var wordsCode=this.props.words.map( (elem, index) =>
      React.createElement(List, {key: index,
        word: elem,
      })
      );

    return React.DOM.div( {className:'Main'}, 
      React.DOM.select( {className:'Words', size:this.props.words.length}, wordsCode ),
    );
  },

});