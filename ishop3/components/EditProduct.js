import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './EditProduct.css';

class EditProduct extends React.Component {

  static propTypes = {
          nameProduct: PropTypes.string.isRequired,
          code: PropTypes.number.isRequired,
          price: PropTypes.number.isRequired,
          quantity: PropTypes.number.isRequired,
          imgURL: PropTypes.string.isRequired,
          selectedProductEdit: PropTypes.number,
          selectedProductCode: PropTypes.number,
          cbSaved: PropTypes.func.isRequired,
          cbBunButtonsEdit: PropTypes.func.isRequired,
          cbBunButtonsDeleteNew: PropTypes.func.isRequired,
  }

  state = {
      newName: this.props.nameProduct,
      newPrice: this.props.price,
      newQuantity: this.props.quantity,
      newURL: this.props.imgURL,
      buttonSave: true,
      controlName: false,
      controlPrice: false,
      controlQuantity: false,
      controlURLLatin: false,
      controlURLFormat: false,
  }

  productNameChanged = (EO) => {
    this.setState( {newName:EO.target.value} );
    if (this.props.cbBunButtonsEdit) this.props.cbBunButtonsEdit(false);
    !EO.target.value ? this.setState( {buttonSave:false} ) : this.setState( {buttonSave:true});
    EO.target.value.length < 4 ? this.setState( {buttonSave:false, controlName:true} ) : this.setState( {buttonSave:true, controlName:false});
  }

  productPriceChanged = (EO) => {
    this.setState( {newPrice: +EO.target.value} );
    if (this.props.cbBunButtonsEdit) this.props.cbBunButtonsEdit(false);
    isNaN(EO.target.value) ? this.setState( {buttonSave:false, controlPrice:true} ) : this.setState( {buttonSave:true, controlPrice:false});
  }

  productQuantityChanged = (EO) => {
    this.setState( {newQuantity: +EO.target.value} );
    if (this.props.cbBunButtonsEdit) this.props.cbBunButtonsEdit(false);
    !EO.target.value ? this.setState( {buttonSave:false} ) : this.setState( {buttonSave:true});
    isNaN(EO.target.value) ? this.setState( {buttonSave:false, controlQuantity:true} ) : this.setState( {buttonSave:true, controlQuantity:false});
  }

  productURLChanged = (EO) => {
    this.setState( {newURL:EO.target.value} );
    if (this.props.cbBunButtonsEdit) this.props.cbBunButtonsEdit(false);
    !/\w/.test(EO.target.value) ? this.setState( {buttonSave:false, controlURLLatin:true} ) : this.setState( {buttonSave:true, controlURLLatin:false});
    !/\w\.((jpg|png){1})$/.test(EO.target.value) ? this.setState( {buttonSave:false, controlURLFormat:true} ) : this.setState( {buttonSave:true, controlURLFormat:false});
  }

  saveChanged = () => {
      if(this.state.buttonSave) {
        let objNewData = {
            "nameProduct": this.state.newName, 
            "code":this.props.code, 
            "price":this.state.newPrice, 
            "quantity":this.state.newQuantity, 
            "imgURL":this.state.newURL,
          };
        this.props.cbSaved(objNewData, this.props.code);
        this.props.cbBunButtonsEdit(true);
        this.props.cbBunButtonsDeleteNew(true);
      }
  }

  cancelChanged = () => {
    let objNewData = false;
    this.props.cbSaved(objNewData, this.props.code);
    this.props.cbBunButtonsEdit(true);
    this.props.cbBunButtonsDeleteNew(true);
  }

  render() {
    return (
            <div className="Edit"> 
                <div className="HeadProduct">Редактировать товар</div>
                <div className="Сlearfix">
                    <label htmlFor='codeProduct'>Код товара:</label>
                    <div className="Registration">
                        <input  id='codeProduct' type='text' name='codeProduct' readOnly value={this.props.code}/>
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
                <button className={`${this.state.buttonSave?'ButtonIn':'ButtonOff'} ${'EditButtons'}`}  onClick={this.saveChanged}>Сохранить</button>
                <button className={`${'ButtonIn'} ${'EditButtons'}`} onClick={this.cancelChanged}>Отмена</button>
            </div>
    )
  }

}

export default EditProduct;