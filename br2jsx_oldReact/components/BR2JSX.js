import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';
import Item from './Item'

class BR2JSX extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  };
  state = {
    list: this.props.text,
  }

  componentWillMount(){
    let arrBr = this.state.list.replace('<br>', '<br/>').split('<br/>') .join(' control ').split(' ');
    let arrBrKey = arrBr.map((elem, i) =>{
      return {'text': elem, 'code': i}
    })
    this.setState({list: arrBrKey});
  }

  render() {

     let arrBr1 = this.state.list.map(elem =>{
      if (elem.text == 'control') {
       return <Item key={elem.code} item={<br/>} list={this.state.list}/>
      }else {
        return <Item key={elem.code} item={elem.text} list={this.state.list}/>
      }
     }
      
    )

    return (
        <div className='BR2JSX'>{arrBr1}</div>
         
    );
  }
}


export default BR2JSX;