import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './CardProduct.css';
import EditProduct from './EditProduct.js';

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

  render() {
    return (
        <Fragment>
        {
            this.props.selectedProductEdit === this.props.selectedProductCode
            ?
           <EditProduct key={this.props.code}
           code={this.props.code}
           nameProduct={this.props.nameProduct}
           price={this.props.price}
           quantity={this.props.quantity}
           imgURL={this.props.imgURL}
           selectedProductEdit={this.props.selectedProductEdit}
           selectedProductCode={this.props.selectedProductCode}
           cbSaved={this.props.cbSaved}
           />
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