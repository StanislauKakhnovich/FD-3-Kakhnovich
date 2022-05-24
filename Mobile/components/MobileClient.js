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
     newClientHash: null,
     editMode: false,
   }

   newSurnameRef = null;
   newBalance = null;

   setNewSurnameRef = (ref) => {
    this.newSurnameRef=ref;
  };

  setNewBalanceRef = (ref) => {
    this.newBalanceRef=ref;
  };



  // setNewSurname = () => {
  //   if ( this.newSurnameRef ) {
  //     let newSurname= {...this.state.clientHash, surname:this.newSurnameRef.value};
  //     this.setState({clientHash: newSurname, editMode: false});
  //   }
  // };

  //current

  changeHash =(EO) => {
    if ( this.newSurnameRef ) {
      let newSurname= {...this.state.clientHash, surname:this.newSurnameRef.value, balance: ~~this.newBalanceRef.value};
      this.setState({newClientHash: newSurname});
      console.log(this.state.newClientHash)
    }
  }
  
  saveClicked = (EO) => {
    //this.props.cbSelected(this.props.code);
    this.setState({editMode: false});
    
    clientEvents.emit('ESaveClicked', this.state.newClientHash);
  }

  // getChanges =()=> {
  //   this.setState({})
  // }

  // freeAnswerTextChanged = (EO) => { 
  //   console.log('VotesAnswer: текст свободного ответа изменён - '+EO.target.value); 
  //   //this.props.cbFreeAnswerTextChanged(EO.target.value);
  //   voteEvents.emit('EFreeAnswerTextChanged',EO.target.value);
  // }

  clientEdit = () => {
    this.setState({editMode: true})
  }


  render() {
    console.log("MobileClient id="+this.state.clientHash.id+" render");

  return (
    
    <tr className='Client'>
    <td className='Surname'>
      <input type={'text'} name={'surname'} className={this.state.editMode?'Editing-enabled':'Editing-disabled'} readOnly={this.state.editMode?false:true} defaultValue={this.state.clientHash.surname} ref={this.setNewSurnameRef}></input>
    </td>
    <td className='Name'>
      <input type={'text'} name={'name'} className={this.state.editMode?'Editing-enabled':'Editing-disabled'} readOnly={this.state.editMode?false:true} defaultValue={this.state.clientHash.name}></input>
    </td>
    <td className='Patronymic'>
      <input type={'text'} name={'patronymic'} className={this.state.editMode?'Editing-enabled':'Editing-disabled'} readOnly={this.state.editMode?false:true} defaultValue={this.state.clientHash.patronymic}></input>
    </td>
    <td className='Balance'>
      <input type={'text'} name={'balance'} className={this.state.editMode?'Editing-enabled':'Editing-disabled'} readOnly={this.state.editMode?false:true} defaultValue={this.state.clientHash.balance} ref={this.setNewBalanceRef} onBlur={this.changeHash}></input>
    </td>
    <td className='Status' style={{backgroundColor:(this.props.clientHash.balance>0)?'green':'red'}}>{this.state.clientHash.balance>0?'active':'blocked'}</td>
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