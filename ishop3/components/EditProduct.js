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
  }

  state = {
      newName: this.props.nameProduct,
      newPrice: this.props.price,
      newQuantity: this.props.quantity,
      newURL: this.props.imgURL,
  }

  productNameChanged = (EO) => {
    this.setState( {newName:EO.target.value} );
  }

  productPriceChanged = (EO) => {
    this.setState( {newPrice: +EO.target.value} );
  }

  productQuantityChanged = (EO) => {
    this.setState( {newQuantity: +EO.target.value} );
  }

  productURLChanged = (EO) => {
    this.setState( {newURL:EO.target.value} );
  }

  saveChanged = () => {
      let objNewData = {
          "nameProduct": this.state.newName, 
          "code":this.props.code, 
          "price":this.state.newPrice, 
          "quantity":this.state.newQuantity, 
          "imgURL":this.state.newURL,
        };
      this.props.cbSaved(objNewData, this.props.code);
  }

  render() {
    return (
            <div className="Edit"> 
                <div className="HeadProduct">Редактировать товар</div>
                <div className="Сlearfix">
                    <label htmlFor='codeProduct'>Код товара:</label>
                    <div className="Registration">
                        <input  id='codeProduct' type='text' name='codeProduct' readOnly value={this.props.code}/>
                        {/* <div class="error" id="error1">The field cannot be empty.</div>
                        <div class="error" id="error11">Enter up to 30 characters.</div> */}
                    </div>
                </div>
                <div className="Сlearfix">
                    <label htmlFor='nameProduct'>Название товара:</label>
                    <div className="Registration">
                        <input  id='nameProduct' type='text' name='nameProduct' defaultValue={this.props.nameProduct} onBlur={this.productNameChanged}/>
                        {/* <div class="error" id="error1">The field cannot be empty.</div>
                        <div class="error" id="error11">Enter up to 30 characters.</div> */}
                    </div>
                </div>
                <div className="Сlearfix">
                    <label htmlFor='priceProduct'>Цена товара, руб:</label>
                    <div className="Registration">
                        <input  id='priceProduct' type='text' name='priceProduct' defaultValue={this.props.price} onBlur={this.productPriceChanged}/>
                        {/* <div class="error" id="error1">The field cannot be empty.</div>
                        <div class="error" id="error11">Enter up to 30 characters.</div> */}
                    </div>
                </div>
                <div className="Сlearfix">
                    <label htmlFor='quantity'>Количество, шт:</label>
                    <div className="Registration">
                        <input  id='quantity' type='text' name='quantity' defaultValue={this.props.quantity} onBlur={this.productQuantityChanged}/>
                        {/* <div class="error" id="error1">The field cannot be empty.</div>
                        <div class="error" id="error11">Enter up to 30 characters.</div> */}
                    </div>
                </div>
                <div className="Сlearfix">
                    <label htmlFor='urlProduct'>URL изображения товара:</label>
                    <div className="Registration">
                        <input  id='urlProduct' type='text' name='urlProduct' defaultValue={this.props.imgURL} onBlur={this.productURLChanged}/>
                        {/* <div class="error" id="error1">The field cannot be empty.</div>
                        <div class="error" id="error11">Enter up to 30 characters.</div> */}
                    </div>
                </div>
                <button id='submit' className="ButtonIn" onClick={this.saveChanged}>Сохранить</button>
            </div>
    )
  }

}

export default EditProduct;