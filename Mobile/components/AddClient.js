import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './AddClient.css';
import {clientEvents} from './events';

class AddClient extends React.PureComponent {

  static propTypes = {
    newClientId: PropTypes.number.isRequired,
  }

  state = {
    newClientHash: null,
  }

  newSurnameRef = null;
   newNameRef = null;
   newPatronymicRef = null;
   newBalanceRef = null;

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

  createHash =(EO) => {
    if ( this.newSurnameRef&&this.newNameRef&&this.newPatronymicRef&&this.newBalanceRef ) {
      let newHash= {id: this.props.newClientId, surname:this.newSurnameRef.value, name:this.newNameRef.value, patronymic:this.newPatronymicRef.value, balance: +this.newBalanceRef.value};
      this.setState({newClientHash: newHash});
      
    }
  }

  saveNewClient = (EO) => {
    clientEvents.emit('ESaveNewClient', this.state.newClientHash);
  }

  cancelNewClient = (EO) => {
    clientEvents.emit('ECancelNewClient');
  }

  render() {
    console.log("AddClient render");

    return (
            <div className="Edit"> 
                <div className="HeadClient">Новый клиент</div>
                <div className="Сlearfix">
                    <label htmlFor='clientId'>Код клиента:</label>
                    <div className="Registration">
                        <input  id='clientId' type='text' name='clientId' readOnly defaultValue={this.props.newClientId} />
                    </div>
                </div>
                <div className="Сlearfix">
                    <label htmlFor='surname'>Фамилия:</label>
                    <div className="Registration">
                        <input  id='surname' type='text' name='surname' ref={this.setNewSurnameRef} onBlur={this.createHash}/>
                    </div>
                </div>
                <div className="Сlearfix">
                    <label htmlFor='name'>Имя:</label>
                    <div className="Registration">
                        <input  id='name' type='text' name='name' ref={this.setNewNameRef} onBlur={this.createHash}/>
                    </div>
                </div>
                <div className="Сlearfix">
                    <label htmlFor='patronymic'>Отчество:</label>
                    <div className="Registration">
                        <input  id='patronymic' type='text' name='patronymic'ref={this.setNewPatronymicRef} onBlur={this.createHash} />
                    </div>
                </div>
                <div className="Сlearfix">
                    <label htmlFor='balance'>Баланс:</label>
                    <div className="Registration">
                        <input  id='balance' type='text' name='balance' ref={this.setNewBalanceRef} onBlur={this.createHash}/>
                    </div>
                </div>
                <button className={`${'EditButtons'}`}  onClick={this.saveNewClient}>Сохранить</button>
                <button className={`${'EditButtons'}`} onClick={this.cancelNewClient}>Отмена</button>
            </div>
    )
  }

}

export default AddClient;