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
    this.state.colors.forEach((elem, i)=>{
      if(i==0){
        control = <div style={{border:"solid 3px "+elem,padding:"5px"}}><div className='RainbowText'>{this.props.children}</div></div>;
      } 
      else {
        control = <div key={i}  style={{border:"solid 3px "+elem,padding:"5px"}}>{control}</div>;
      } 
    })

    return control;
  }
}


export default RainbowFrame;