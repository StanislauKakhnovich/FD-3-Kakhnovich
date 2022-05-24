import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './AddClient.css';

class AddClient extends React.PureComponent {

  static propTypes = {

  }

  state = {
      controlEmpty: false,
      newName: this.props.nameProduct,
      newPrice: this.props.price,
      newQuantity: this.props.quantity,
      newURL: this.props.imgURL,

  }


  addNewProduct = () => {
    if(this.state.newName&&this.state.newPrice&&this.state.newQuantity&&this.state.newURL&&!this.state.controlEmpty&&
      !this.state.controlName&&!this.state.controlPrice&&!this.state.controlQuantity&&!this.state.controlURLLatin&&
      !this.state.controlURLFormat) {
        
        let objNewData = {
            "nameProduct": this.state.newName, 
            "code":this.props.newCode, 
            "price":this.state.newPrice, 
            "quantity":this.state.newQuantity, 
            "imgURL":this.state.newURL,
          };
        this.props.cbAddSaved(objNewData, this.props.code);
        this.props.cbBunButtonsEdit(true);
        this.props.cbBunButtonsDeleteNew(true);
      }
  }

  cancelChanged = () => {
    let objNewData = false;
    this.props.cbAddSaved(objNewData, this.props.code);
    this.props.cbBunButtonsEdit(true);
    this.props.cbBunButtonsDeleteNew(true);
  }

  render() {
    return (
            <div className="Edit"> 
                <div className="HeadClient">Новый клиент</div>
                <div className="Сlearfix">
                    <label htmlFor='surname'>Фамилия:</label>
                    <div className="Registration">
                        <input  id='surname' type='text' name='surname' onChange={this.productNameChanged}/>
                           {
                           !this.state.controlEmpty&&
                            <div className="ErrorValid">Поле не должно быть пустым</div>
                           }
                    </div>
                </div>
                <div className="Сlearfix">
                    <label htmlFor='name'>Имя:</label>
                    <div className="Registration">
                        <input  id='name' type='text' name='name' onChange={this.productPriceChanged}/>
                            {
                            !this.state.controlEmpty&&
                            <div className="ErrorValid">Поле не должно быть пустым</div>
                            }
                    </div>
                </div>
                <div className="Сlearfix">
                    <label htmlFor='patronymic'>Количество, шт:</label>
                    <div className="Registration">
                        <input  id='patronymic' type='text' name='patronymic' onChange={this.productQuantityChanged}/>
                            {
                            !this.state.controlEmpty&&
                            <div className="ErrorValid">Поле не должно быть пустым</div>
                            }
                    </div>
                </div>
                <div className="Сlearfix">
                    <label htmlFor='balance'>URL изображения товара:</label>
                    <div className="Registration">
                        <input  id='balance' type='text' name='balance' onChange={this.productURLChanged}/>
                            {
                            !this.state.controlEmpty&&
                            <div className="ErrorValid">Поле не должно быть пустым</div>
                            }
                    </div>
                </div>
                <button className={`${this.state.controlEmpty
                    ?'ButtonIn':'ButtonOff'} ${'EditButtons'}`}  onClick={this.addNewProduct}>Сохранить</button>
                <button className={`${'ButtonIn'} ${'EditButtons'}`} onClick={this.cancelChanged}>Отмена</button>
            </div>
    )
  }

}

export default AddClient;