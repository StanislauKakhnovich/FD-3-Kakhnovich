import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './CardProduct.css';

class CardProduct extends React.Component {

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
      newName: null,
      newPrice: null,
      newQuantity: null,
      newURL: null,
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
          "nameProduct": this.state.newName?this.state.newName:this.props.nameProduct, 
          "code":this.props.code, 
          "price":this.state.newPrice?this.state.newPrice:this.props.price, 
          "quantity":this.state.newQuantity?this.state.newQuantity:this.props.quantity, 
          "imgURL":this.state.newURL?this.state.newURL:this.props.imgURL,
        };
      this.props.cbSaved(objNewData, this.props.code, null);
  }

  render() {
    return (
        <Fragment>
        {
            this.props.selectedProductEdit === this.props.selectedProductCode
            ?
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
            :
        <table>
            <caption className='HeadCard'>Карточка товара</caption>
            <tbody>
            <tr>
                <th className='HeadTable'>Код товара</th>
                <td className='Code'>{this.props.code}</td>
            </tr>   
            <tr>
                <th className='HeadTable'>Наименование товара</th>
                <td className='Product'>{this.props.nameProduct}</td>
            </tr>
            <tr>
                <th className='HeadTable'>Цена товара, руб</th>
                <td className='Price'>{this.props.price}</td>
            </tr>
            <tr>
                <th className='HeadTable'>Количество, шт</th>
                <td className='Quantity'>{this.props.quantity}</td>
            </tr>
            <tr>
                <th className='HeadTable'>Изображение товара</th>
                <td className='Image'><img className='ImgURL' src={this.props.imgURL}></img></td>
            </tr>
            </tbody>
        </table>
        }
        </Fragment>

    )
  }

}


export default CardProduct;