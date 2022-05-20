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
    let control=<div className='RainbowText'>{this.props.children}</div>;
    this.state.colors.forEach((elem, i)=>{
        control = <div key={i}  style={{border:"solid 3px "+elem,padding:"5px"}}>{control}</div>;
    })

    return control;
  }
}


export default RainbowFrame;