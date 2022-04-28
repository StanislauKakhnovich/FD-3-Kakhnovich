var Main = React.createClass({

  displayName: 'Main',

  propTypes: {
    startWords: React.PropTypes.array.isRequired,
    startWords:React.PropTypes.arrayOf(
      React.PropTypes.string.isRequired,
    ),

  },

  getInitialState: function() {
    return { 
      words: this.props.startWords,
    };
  },

  sortWords: function() {
    this.setState( {words: this.state.words.sort()} ); 
  },

  render: function() {

    var wordsCode=this.state.words.map( (elem, index) =>
      React.createElement(List, {key: index,
        word: elem,
        })
      );

    return React.DOM.div( {className:'Main'}, 
      React.DOM.input({type:'checkbox', className:'Checkbox',onClick:this.sortWords}),
      React.DOM.input({type:'text', name:'inputtext', className:'Text'}),
      React.DOM.input( {type:'button',value:'Сброс',className:'Reset',onClick:this.Resetwords}),
      React.DOM.select( {name:'selecttext',className:'Words', size:this.state.words.length}, wordsCode ),
    );
  },

});