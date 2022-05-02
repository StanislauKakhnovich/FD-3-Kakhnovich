var Main = React.createClass({

  displayName: 'Main',

  propTypes: {
    linesOriginal:React.PropTypes.array.isRequired,
    linesOriginal:React.PropTypes.arrayOf(
      React.PropTypes.string.isRequired,
    ),

  },
  getInitialState: function() {
    return { 
      lines: Object.values(Object.assign({},this.props.linesOriginal)),
    };
  },
  
  render: function() {
 
    return React.DOM.div( {className:'Main'}, 
    React.createElement( Form, {linesOriginal:this.props.linesOriginal,
      lines: this.state.lines,
    } ),
    );
  },

});