import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './MobileCompany.css';

import MobileClient from './MobileClient';



class MobileCompany extends React.Component {

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

   }



  render() {

    let clientsArr=this.state.clientsList.map((elem, i) =>
      <MobileClient key={i}  clientHash={elem}
      />
    );


  return (
    <div>
    <div>
      <input type={'button'}  id={1} value='Velcom' className ={'Button'} onClick={this.pressed}></input>
      <input type={'button'}  id={2} value='МТС' className ={'Button'} onClick={this.pressed}></input>
      <div  className='MobileCompany'>Компания: {this.state.name}</div>
    </div>
     <div className='FilterButtons'>
       <input type={'button'}  id={3} value='Все' className ={'Button'} onClick={this.pressed}></input>
       <input type={'button'}  id={4} value='Активные' className ={'Button'} onClick={this.pressed}></input>
       <input type={'button'}  id={5} value='Заблокированные' className ={'Button'} onClick={this.pressed}></input>
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