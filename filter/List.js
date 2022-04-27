var List = React.createClass({

    displayName: 'List',
  
    propTypes: {
      words: React.PropTypes.array.isRequired,
      words:React.PropTypes.arrayOf(
        React.PropTypes.string.isRequired,
      ),
    },

    
    
  
    render: function() {
      return React.DOM.option({className:'Word'},this.props.word)
    }
  });
  

  