var Main = React.createClass({

  displayName: 'Main',

  propTypes: {
    startWords:React.PropTypes.array.isRequired,
    startWords:React.PropTypes.arrayOf(
      React.PropTypes.string.isRequired,
    ),

  },

  getInitialState: function() {
    return { 
      words: this.props.startWords,
      arr: this.props.startWords,
    };
  },

  sortWords: function(EO) {
    
    if (EO.target.checked) {
      this.setState( {words: this.state.words.sort()} ); 
      
    }
    if (!EO.target.checked) {
      this.setState( {words: this.state.arr} ); 
      console.log(this.state.words);
    }
    
  },

  resetWords: function() {
    this.setState( {words: this.state.arr} );
    console.log(this.state.arr);
  },

  changeList: function(EO) {
    this.setState( {words: this.state.words.filter(elem => elem.includes(EO.target.value))} );
    
  },

  render: function() {

    var wordsCode=this.state.words.map( (elem, index) =>
      React.createElement(List, {key: index,
        word: elem,
        valueNumber: index,
        })
      );

    return React.DOM.div( {className:'Main'}, 
      React.DOM.input({type:'checkbox', className:'Checkbox',onClick:this.sortWords}),
      React.DOM.input({type:'text', name:'inputtext', className:'Text',onChange:this.changeList}),
      React.DOM.input( {type:'button',value:'Сброс',className:'Reset',onClick:this.resetWords}),
      React.DOM.select( {name:'selecttext',className:'Words', size:this.state.words.length}, wordsCode ),
    );
  },

});