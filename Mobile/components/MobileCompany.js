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

  componentDidMount = () => {
    clientEvents.addListener('ESaveClicked',this.clientChange);
  };

  componentWillUnmount = () => {
    clientEvents.removeListener('ESaveClicked',this.clientChange);
  };

  clientChange = (obj) => {
    if (obj) {
      let arr = this.state.clientsList;
      arr.forEach((elem, index,arr)=>elem.id === obj.id&&(arr[index]=obj))
      this.setState({clientsList: arr});
      console.log(this.state.clientsList)
    }


    // console.log(obj);
    // let newArr= [...this.state.clientsList];
    // newArr.map((elem, i) => {
    //   if (elem.id==obj.id) {
    //     elem ={...obj};
    //     console.log(elem)
    //   } 
      
    // })
    // console.log(newArr);
    
  }

  // setBalance = (clientId,newBalance) => {
  //   let changed=false;
  //   let newClients=[...this.state.clients]; // копия самого массива клиентов
  //   newClients.forEach( (c,i) => {
  //     if ( c.id==clientId && c.balance!=newBalance ) {
  //       let newClient={...c}; // копия хэша изменившегося клиента
  //       newClient.balance=newBalance;
  //       newClients[i]=newClient;
  //       changed=true;
  //     }
  //   } );
  //   if ( changed )
  //     this.setState({clients:newClients});
  // };


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
      <input type={'button'}  id={1} value='Velcom' className ={'Button'} onClick={this.setName1}></input>
      <input type={'button'}  id={2} value='МТС' className ={'Button'} onClick={this.setName2}></input>
      <div  className='MobileCompany'>Компания: {this.state.name}</div>
    </div>
     <div className='FilterButtons'>
       <input type={'button'}  id={3} value='Все' className ={'Button'} onClick={this.getAll}></input>
       <input type={'button'}  id={4} value='Активные' className ={'Button'} onClick={this.getActived}></input>
       <input type={'button'}  id={5} value='Заблокированные' className ={'Button'} onClick={this.getBlocked}></input>
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
       <AddClient
       />
      }
    </div>
  );
  }
}

export default MobileCompany;