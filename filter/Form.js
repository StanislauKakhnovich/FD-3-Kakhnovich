var Form = React.createClass({

    displayName: 'Form',
  
    propTypes: {
      linesOriginal:React.PropTypes.array.isRequired,
      linesOriginal:React.PropTypes.arrayOf(
        React.PropTypes.string.isRequired,
      ),
  
    },
  
    getInitialState: function() {
      return { 
        filterStr: "",
        sortFlag: false,
        lines: this.props.copyChange,
      };
    },
  
    sortFlagChanged: function (eo) {
      this.setState ({sortFlag: eo.target.checked}, this.processList);
      console.log(this.state.sortFlag);
    },
  
    filterStrChanged: function (eo) {
      this.setState ({filterStr: eo.target.value}, this.processList);
      console.log(this.state.filterStr);
    },
  
    processList: function() {
      var arr = Object.values(Object.assign({},this.props.copyChange)) ;
      if (this.state.sortFlag) {
        arr.sort();
         if (this.state.filterStr) {
           arr = arr.filter(elem => elem.includes(this.state.filterStr));
         }
        this.setState ({lines: arr}); 
      } 
      else if (this.state.filterStr) {
        arr = arr.filter(elem => elem.includes(this.state.filterStr));
            if (this.state.sortFlag) {
             arr.sort();
           }
        this.setState ({lines: arr}); 
      } else {
        this.setState ({lines: this.props.linesOriginal}); 
      }
    },
  
    reset: function() {
      this.setState({sortFlag: false, filterStr: ""}, this.processList)
    },
  
  
    render: function() {
     var wordCode = this.state.lines.map( (elem, index) =>
        React.createElement(List, {key: index,
          word: elem,
          valueNumber: index,
          })
        );
  
      return React.DOM.div( {className:'Form'}, 
        React.DOM.input({type:'checkbox',
          className:'Checkbox',
          checked:this.state.sortFlag,
          onChange:this.sortFlagChanged}),
        React.DOM.input({type:'text', 
          name:'inputtext', 
          className:'Text',
          value:this.state.filterStr,
          onChange:this.filterStrChanged}),
        React.DOM.input( {type:'button',
          value:'Сброс',
          className:'Reset',
          onClick:this.reset}),
        React.DOM.select( {name:'selecttext',
          className:'Words', 
          size:this.state.lines.length}, wordCode ),
      );
    },
  
  });