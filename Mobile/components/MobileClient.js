import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.Component {

   static propTypes = {
    clientHash: PropTypes.object.isRequired,
   }

   state={
     clientHash: this.props.clientHash,
   }


  render() {

  return (

    <tr className='Client'>
    <td className='Surname'>{this.state.clientHash.surname}</td>
    <td className='Name'>{this.state.clientHash.name}</td>
    <td className='Patronymic'>{this.state.clientHash.patronymic}</td>
    <td className='Balance'>{this.state.clientHash.balance}</td>
    <td className='Status' style={{backgroundColor:(this.state.clientHash.balance>0)?'green':'red'}}>{this.state.clientHash.balance>0?'active':'blocked'}</td>
    <td className='Edit'>
      <input type={'button'} value={'Редактировать'} className ={this.props.editMode?'ButtonIn':'ButtonOff'} onClick={this.productEdit}></input>
    </td>
    <td className='Delete'>
      <input type={'button'} value={'Удалить'} className ={this.props.buttonsDeleteNew?'ButtonIn':'ButtonOff'} onClick={this.productDelete}></input>
    </td>
  </tr>
    );
  }
}

export default MobileClient;