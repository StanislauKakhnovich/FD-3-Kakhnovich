import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './DoubleButton.css';

class DoubleButton extends React.Component {

   static propTypes = {
    caption1: PropTypes.array.isRequired,
    caption2: PropTypes.array.isRequired,
    firstRender: PropTypes.bool.isRequired,
   }

   state = {
   
   }

  pressed = (EO) => {
    if (this.props.cbPressed) this.props.firstRender?this.props.cbPressed(false):this.props.cbPressed(true);
  }

  render() {

  return (

    <div className ={'Container'} >
        <input type={'button'} value={this.props.firstRender?this.props.caption1[0]:this.props.caption2[0]} className ={'Button'} onClick={this.pressed}></input>
            {this.props.children}
        <input type={'button'} value={this.props.firstRender?this.props.caption1[1]:this.props.caption2[1]} className ={'Button'} onClick={this.pressed}></input>
    </div>
    );
  }
}

export default DoubleButton;