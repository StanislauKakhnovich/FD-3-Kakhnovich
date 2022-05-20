import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';


class BR2JSX extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  };
  state = {
    list: this.props.text,
  }


  render() {
    let arrBr = this.state.list.replace('<br>', '<br/>').split('<br/>') .join(' control ').split(' ');

     let arrBr1 = arrBr.map((elem, i) =>{

      if (elem == 'control') {
       return  <br key={i}/>
      }else {
        return  elem
      }
     });

    return (
        <div  className='BR2JSX'>{arrBr1}</div>
         
    );
  }
}


export default BR2JSX;