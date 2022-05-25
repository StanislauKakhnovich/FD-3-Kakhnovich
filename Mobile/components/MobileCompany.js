import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './MobileCompany.css';

import MobileClient from './MobileClient';
import AddClient from './AddClient';
import {clientEvents} from './events';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients: PropTypes.array.isRequired,
    clients: PropTypes.arrayOf(
      PropTypes.shape({
        surname: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        patronymic: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,     
      })
    ),
   }

   state = {
     name: this.props.name,
     clientsList: this.props.clients,
     addNewClient: false,
     active: true,
     blocked: true,
     renderAll: true,
     renderActive: false,
     renderBlocked: false,
     newClientId: null,
   }

   setName1 = () => {
    this.setState({name:'Velcom'});
    
  };

  setName2 = () => {
    this.setState({name:'МТС'});
  };

  getAll = () => {
    this.setState({renderAll: true, renderActive: false, renderBlocked: false})
  }

  getActived = () => {
    this.setState({renderAll: false, renderActive: true, renderBlocked: false})
  }

  getBlocked = () => {
    this.setState({renderAll: false, renderActive: false, renderBlocked: true})
  }

  productNew = () => {
    this.setState({addNewClient: true});
    let arr = this.state.clientsList;
    let idArr = [];
    arr.forEach(elem => idArr.push(elem.id));
    let maxId = Math.max(...idArr)+1;
    this.setState( {newClientId:maxId} );
  }

  componentDidMount = () => {
    clientEvents.addListener('ESaveClicked',this.clientChange);
    clientEvents.addListener('EDeleteClicked',this.clientDelete);
    clientEvents.addListener('ESaveNewClient',this.addNewClient);
    clientEvents.addListener('ECancelNewClient',this.cancelNewClient);
  };

  componentWillUnmount = () => {
    clientEvents.removeListener('ESaveClicked',this.clientChange);
    clientEvents.removeListener('EDeleteClicked',this.clientDelete);
    clientEvents.removeListener('ESaveNewClient',this.addNewClient);
    clientEvents.removeListener('ECancelNewClient',this.cancelNewClient);
  };

  clientChange = (obj) => {
    if (obj) {
      let changed=false;
      let arr = this.state.clientsList.slice();
      arr.forEach((elem, i)=> {
        if ( elem.id==obj.id) {
          let newClient={...elem};
          newClient=obj;
          arr[i]=newClient;
          changed=true;
        }
      } );
      if ( changed )
      this.setState({clientsList: arr});
    }
  }
  
  clientDelete = (id) => {  
    this.setState( {clientsList: this.state.clientsList.filter(elem => elem.id !== id)} );
  }

  addNewClient = (obj => {
    if (obj) {
      let arr = this.state.clientsList.slice();
      arr.push(obj);
      this.setState({clientsList: arr});
    }
    this.setState({addNewClient: false});
  })




  cancelNewClient = () => {
    this.setState({addNewClient: false});
  }




  render() {
    
    console.log("MobileCompany render");

    let clientsArr=this.state.clientsList.map(elem => {
      if (this.state.renderAll) return <MobileClient key={elem.id} clientHash={elem}/>
      else if (this.state.renderActive) return elem.balance > 0 && <MobileClient key={elem.id} clientHash={elem}/>
      else if (this.state.renderBlocked) return  elem.balance <= 0 && <MobileClient key={elem.id}  clientHash={elem}/>
    });

  return (
    <div>
    <div>
      <input type={'button'} value='Velcom' className ={'Button'} onClick={this.setName1}></input>
      <input type={'button'} value='МТС' className ={'Button'} onClick={this.setName2}></input>
      <div  className='MobileCompany'>Компания: {this.state.name}</div>
    </div>
     <div className='FilterButtons'>
       <input type={'button'} value='Все' className ={'Button'} onClick={this.getAll}></input>
       <input type={'button'} value='Активные' className ={'Button'} onClick={this.getActived}></input>
       <input type={'button'} value='Заблокированные' className ={'Button'} onClick={this.getBlocked}></input>
     </div>
     <table className='ListClients'>
      <thead className='HeadTable'>
          <tr>
            <th className='HeadSurName'>Фамилия</th>
            <th className='HeadName'>Имя</th>
            <th className='HeadPatronymic'>Отчество</th>
            <th className='HeadBalance'>Баланс</th>
            <th className='HeadStatus'>Статус</th>
            <th className='HeadEdit'>Редактировать</th>
            <th className='HeadDelete'>Удалить</th>
          </tr>
      </thead>
      <tbody className='Clients'>{clientsArr}</tbody>
     </table>
    <input type={'button'} value={'Добавить клиента'} className ='Button' onClick={this.productNew}></input>
    {
        this.state.addNewClient&&
       <AddClient newClientId={this.state.newClientId}/>
      }
    </div>
  );
  }
}

export default MobileCompany;