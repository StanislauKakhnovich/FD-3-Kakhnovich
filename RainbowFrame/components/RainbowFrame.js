import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {
  static propTypes = {
    colors: PropTypes.array,
  };
  state = {
    colors: this.props.colors,
  }

  render() {
    let control;
     let arr = this.state.colors.map((elem, i)=>{
      if(i==0){
        control = <div style={{border:"solid 3px "+elem,padding:"5px"}}><div className='RainbowText'>{this.props.children}</div></div>;
          return control
      } 
      else {
        control = <div key={i}  style={{border:"solid 3px "+elem,padding:"5px"}}>{control}</div>;
      } return control
    })

    return (
      <div>{arr[arr.length-1]}</div>
    );
  }
}


export default RainbowFrame;