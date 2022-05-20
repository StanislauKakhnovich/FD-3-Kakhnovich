import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';


class BR2JSX extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  };

  render() {
    let arrBr = this.props.text.split(/<br>|<br\/>/);

     let arrBr1 = [];
     arrBr.forEach((elem, i) =>{
        arrBr1.push(elem)  
      if (i!=arrBr.length-1) {
        arrBr1.push(<br key={i}/>)  
      }
     });

    return (
        <div  className='BR2JSX'>{arrBr1}</div>
    );
  }
}


export default BR2JSX;