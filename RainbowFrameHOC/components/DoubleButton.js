import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './DoubleButton.css';

class DoubleButton extends React.Component {

   static propTypes = {
    caption1: PropTypes.string.isRequired,
    caption2: PropTypes.string.isRequired,
    cbPressed: PropTypes.func.isRequired,
   }

  pressed = (EO) => {
    if (this.props.cbPressed) EO.target.id == 1?this.props.cbPressed(true):this.props.cbPressed(false);
  }
  render() {

  return (

    <div className ={'Container'} >
        <input type={'button'}  id={1} value={this.props.caption1} className ={'Button'} onClick={this.pressed}></input>
            {this.props.children}
        <input type={'button'}  id={2} value={this.props.caption2} className ={'Button'} onClick={this.pressed}></input>
    </div>
    );
  }
}

export default DoubleButton;