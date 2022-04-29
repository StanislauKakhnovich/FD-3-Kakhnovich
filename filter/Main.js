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
      arrEtalon: Object.values(Object.assign({},this.props.startWords)),
      wordRender: this.props.startWords,
    };
  },

  sortWords: function(EO) {
    
    if (EO.target.checked) {

      this.setState( {wordRender: this.state.wordRender.sort()} );
      console.log(this.state.arrEtalon);
      
    }
    if (!EO.target.checked) {
      this.setState( {wordRender: this.state.arrEtalon} ); 
    }
    
  },

  resetWords: function() {
    this.setState( {wordRender: this.state.arrEtalon} ); 
    
  },

  changeList: function(EO) {
    
    this.setState( {wordRender: this.state.wordRender.filter(elem => elem.includes(EO.target.value))} );
    
  },

  render: function() {

   var wordCode = this.state.wordRender.map( (elem, index) =>
      React.createElement(List, {key: index,
        word: elem,
        valueNumber: index,
        })
      );

    return React.DOM.div( {className:'Main'}, 
      React.DOM.input({type:'checkbox', className:'Checkbox',onClick:this.sortWords}),
      React.DOM.input({type:'text', name:'inputtext', className:'Text',onChange:this.changeList}),
      React.DOM.input( {type:'button',value:'Сброс',className:'Reset',onClick:this.resetWords}),
      React.DOM.select( {name:'selecttext',className:'Words', size:this.state.wordRender.length}, wordCode ),
    );
  },

});