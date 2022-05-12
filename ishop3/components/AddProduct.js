import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './AddProduct.css';

class AddProduct extends React.Component {

  static propTypes = {
    newCode: PropTypes.number,
          addNewProduct: PropTypes.bool.isRequired,
          selectedProductEdit: PropTypes.number,
          selectedProductCode: PropTypes.number,
          cbAddSaved: PropTypes.func.isRequired,
          cbBunButtonsEdit: PropTypes.func.isRequired,
          cbBunButtonsDeleteNew: PropTypes.func.isRequired,
  }

  state = {
      
      newName: this.props.nameProduct,
      newPrice: this.props.price,
      newQuantity: this.props.quantity,
      newURL: this.props.imgURL,
      buttonSave: false,
      controlName: false,
      controlPrice: false,
      controlQuantity: false,
      controlURLLatin: false,
      controlURLFormat: false,
  }

  productNameChanged = (EO) => {
    this.setState( {newName:EO.target.value} );
    if (this.props.cbBunButtonsEdit) this.props.cbBunButtonsEdit(false);
    EO.target.value.length < 4 ? this.setState( {controlName:true} ) : this.setState( {controlName:false});
  }

  productPriceChanged = (EO) => {
    this.setState( {newPrice: +EO.target.value} );
    if (this.props.cbBunButtonsEdit) this.props.cbBunButtonsEdit(false);
    isNaN(EO.target.value) ? this.setState( {controlPrice:true} ) : this.setState( {controlPrice:false});
  }

  productQuantityChanged = (EO) => {
    this.setState( {newQuantity: +EO.target.value} );
    if (this.props.cbBunButtonsEdit) this.props.cbBunButtonsEdit(false);
    isNaN(EO.target.value) ? this.setState( {controlQuantity:true} ) : this.setState( {controlQuantity:false});
  }

  productURLChanged = (EO) => {
    this.setState( {newURL:EO.target.value} );
    if (this.props.cbBunButtonsEdit) this.props.cbBunButtonsEdit(false);
    !/\w/.test(EO.target.value) ? this.setState( {controlURLLatin:true} ) : this.setState( {controlURLLatin:false});
    !/\w\.((jpg|png){1})$/.test(EO.target.value) ? this.setState( {controlURLFormat:true} ) : this.setState( {controlURLFormat:false});
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
                <div className="HeadProduct">Новый товар</div>
                <div className="Сlearfix">
                    <label htmlFor='codeProduct'>Код товара:</label>
                    <div className="Registration">
                        <input  id='codeProduct' type='text' name='codeProduct' readOnly value={this.props.newCode}/>
                    </div>
                </div>
                <div className="Сlearfix">
                    <label htmlFor='nameProduct'>Название товара:</label>
                    <div className="Registration">
                        <input  id='nameProduct' type='text' name='nameProduct' defaultValue={this.props.nameProduct} onChange={this.productNameChanged}/>
                           {
                            !this.state.newName&&
                            <div className="Error">Поле не должно быть пустым</div>
                           }
                           {
                            this.state.controlName&&
                            <div className="Error">В названии товара должно быть не менее 4 знаков</div>
                           }
                            
                    </div>
                </div>
                <div className="Сlearfix">
                    <label htmlFor='priceProduct'>Цена товара, руб:</label>
                    <div className="Registration">
                        <input  id='priceProduct' type='text' name='priceProduct' defaultValue={this.props.price} onChange={this.productPriceChanged}/>
                            {
                            !this.state.newPrice&&
                            <div className="Error">Поле не должно быть пустым</div>
                            }
                            {
                            this.state.controlPrice&&
                            <div className="Error">Должно быть число</div>
                            }
                        
                    </div>
                </div>
                <div className="Сlearfix">
                    <label htmlFor='quantity'>Количество, шт:</label>
                    <div className="Registration">
                        <input  id='quantity' type='text' name='quantity' defaultValue={this.props.quantity} onChange={this.productQuantityChanged}/>
                            {
                            !this.state.newQuantity&&
                            <div className="Error">Поле не должно быть пустым</div>
                            }
                            {
                            this.state.controlQuantity&&
                            <div className="Error">Должно быть число</div>
                            }
                    </div>
                </div>
                <div className="Сlearfix">
                    <label htmlFor='urlProduct'>URL изображения товара:</label>
                    <div className="Registration">
                        <input  id='urlProduct' type='text' name='urlProduct' defaultValue={this.props.imgURL} onChange={this.productURLChanged}/>
                            {
                            !this.state.newURL&&
                            <div className="Error">Поле не должно быть пустым</div>
                            }
                            {
                            this.state.controlURLLatin&&
                            <div className="Error">Название файла должно быть на латинице.</div>
                            }
                            {
                            this.state.controlURLFormat&&
                            <div className="Error">Файл должен быть в формате jpg или png</div>
                            }
                        
                    </div>
                </div>
                <button className={`${this.state.newName&&this.state.newPrice&&this.state.newQuantity&&this.state.newURL&&
                    !this.state.controlEmpty&&!this.state.controlName&&!this.state.controlPrice&&!this.state.controlQuantity&&
                    !this.state.controlURLLatin&&!this.state.controlURLFormat
                    ?'ButtonIn':'ButtonOff'} ${'EditButtons'}`}  onClick={this.addNewProduct}>Сохранить</button>
                <button className={`${'ButtonIn'} ${'EditButtons'}`} onClick={this.cancelChanged}>Отмена</button>
            </div>
    )
  }

}

export default AddProduct;