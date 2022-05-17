import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';

class BR2JSX extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  };
  state = {
    text: this.props.text,
  }

  render() {
    let arrBr = this.state.text.replace('<br>', '<br/>').split('<br/>') .join('_control_').split('_');
    let arrBr1 = arrBr.map((elem, i) =>{
       if (elem === 'control') return <br/>
       else return elem
    })
    return (
        <div className='BR2JSX'>{arrBr1}</div>
         
    );
  }
}


export default BR2JSX;