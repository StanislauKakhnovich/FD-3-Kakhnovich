import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

   static propTypes = {
    clientHash: PropTypes.object.isRequired,
   }

   state={
     clientHash: this.props.clientHash,
     editMode: false,
   }


  render() {

  return (
    
    <tr className='Client'>
    <td className='Surname'>
      <input type={'text'} name={'surname'} className={this.state.editMode?'Editing-enabled':'Editing-disabled'} readOnly={this.state.editMode?false:true} defaultValue={this.state.clientHash.surname}></input>
    </td>
    <td className='Name'>
      <input type={'text'} name={'name'} className={this.state.editMode?'Editing-enabled':'Editing-disabled'} readOnly={this.state.editMode?false:true} defaultValue={this.state.clientHash.name}></input>
    </td>
    <td className='Patronymic'>
      <input type={'text'} name={'patronymic'} className={this.state.editMode?'Editing-enabled':'Editing-disabled'} readOnly={this.state.editMode?false:true} defaultValue={this.state.clientHash.patronymic}></input>
    </td>
    <td className='Balance'>
      <input type={'text'} name={'balance'} className={this.state.editMode?'Editing-enabled':'Editing-disabled'} readOnly={this.state.editMode?false:true} defaultValue={this.state.clientHash.balance}></input>
    </td>
    <td className='Status' style={{backgroundColor:(this.state.clientHash.balance>0)?'green':'red'}}>{this.state.clientHash.balance>0?'active':'blocked'}</td>
    <td className='EditButton'>
      <input type={'button'} value={'Редактировать'} className ='Button' onClick={this.productEdit}></input>
    </td>
    <td className='DeleteButton'>
      <input type={'button'} value={'Удалить'} className ='Button' onClick={this.productDelete}></input>
    </td>
  </tr>
    );
  }
}

export default MobileClient;