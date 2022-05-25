import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';
import {clientEvents} from './events';

class MobileClient extends React.PureComponent {

   static propTypes = {
    clientHash: PropTypes.object.isRequired,
   }

   state={
     clientHash: this.props.clientHash,
     editMode: false,
     newHash: null,
   }

   newSurnameRef = this.state.clientHash.surname;
   newNameRef = this.state.clientHash.name;
   newPatronymicRef = this.state.clientHash.patronymic;
   newBalanceRef = this.state.clientHash.balance;

   setNewSurnameRef = (ref) => {
    this.newSurnameRef=ref;
  };
  setNewNameRef = (ref) => {
    this.newNameRef=ref;
  };
  setNewPatronymicRef = (ref) => {
    this.newPatronymicRef=ref;
  };
  setNewBalanceRef = (ref) => {
    this.newBalanceRef=ref;
  };

  saveClicked = (EO) => {
    let obj = {...this.state.clientHash};
    if ( this.newSurnameRef&&this.newNameRef&&this.newPatronymicRef&&this.newBalanceRef ) {
      obj= {...obj, surname:this.newSurnameRef.value, name:this.newNameRef.value, patronymic:this.newPatronymicRef.value, balance: +this.newBalanceRef.value};
      this.setState({newHash: obj, clientHash: obj, editMode: false}, this.postSave);
  }
}

postSave =()=>{
  clientEvents.emit('ESaveClicked', this.state.newHash);
}

  clientEdit = () => {
    this.setState({editMode: true})
  }

  productDelete = () => {
    clientEvents.emit('EDeleteClicked', this.state.clientHash.id);
  }

  render() {
    console.log("MobileClient id="+this.state.clientHash.id+" render");

  return (
    
    <tr className='Client'>
    <td className='Surname'>
      <input type={'text'} name={'surname'} className={this.state.editMode?'Editing-enabled':'Editing-disabled'} readOnly={this.state.editMode?false:true} defaultValue={this.state.clientHash.surname} ref={this.setNewSurnameRef} ></input>
    </td>
    <td className='Name'>
      <input type={'text'} name={'name'} className={this.state.editMode?'Editing-enabled':'Editing-disabled'} readOnly={this.state.editMode?false:true} defaultValue={this.state.clientHash.name} ref={this.setNewNameRef} ></input>
    </td>
    <td className='Patronymic'>
      <input type={'text'} name={'patronymic'} className={this.state.editMode?'Editing-enabled':'Editing-disabled'} readOnly={this.state.editMode?false:true} defaultValue={this.state.clientHash.patronymic} ref={this.setNewPatronymicRef} ></input>
    </td>
    <td className='Balance'>
      <input type={'text'} name={'balance'} className={this.state.editMode?'Editing-enabled':'Editing-disabled'} readOnly={this.state.editMode?false:true} defaultValue={this.state.clientHash.balance} ref={this.setNewBalanceRef} ></input>
    </td>
    <td className='Status' style={{backgroundColor:(this.state.clientHash.balance>0)?'green':'red'}}>{this.state.clientHash.balance>0?'active':'blocked'}</td>
    <td className='EditButton'>
      <input type={'button'} value={'Редактировать'} className ='Button' onClick={this.clientEdit}></input>
      {
        this.state.editMode&&
      <input type={'button'} value={'Сохранить'} className ='Button' onClick={this.saveClicked}></input>
      }
    </td>
    <td className='DeleteButton'>
      <input type={'button'} value={'Удалить'} className ='Button' onClick={this.productDelete}></input>
    </td>
  </tr>
    );
  }
}

export default MobileClient;