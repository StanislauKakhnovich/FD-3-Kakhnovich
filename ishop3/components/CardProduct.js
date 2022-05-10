import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './Product.css';

class CardProduct extends React.Component {

  static propTypes = {
          nameProduct: PropTypes.string.isRequired,
          code: PropTypes.number.isRequired,
          price: PropTypes.number.isRequired,
          quantity: PropTypes.number.isRequired,
          imgURL: PropTypes.string.isRequired,
  }

  render() {
    return (
        // <Fragment>
        //     <div className='NameProduct'><span>Наименование товара</span><span>{this.props.nameProduct}</span></div>
        //     <div className='Price'><span>Цена товара</span>{this.props.price}</div>
        //     <div className='Quantity' >{this.props.quantity}</div>
        //     <img className='ImgURL' src={this.props.imgURL}></img>
        // </Fragment>
        <table>
            <tr>
                <th className='HeadTable'>Наименование товара</th>
                <td className='Product'>{this.props.nameProduct}</td>
            </tr>
            <tr>
                <th className='HeadTable'>Цена товара</th>
                <td className='Price'>{this.props.price}</td>
            </tr>
            <tr>
                <th className='HeadTable'>Количество</th>
                <td className='Quantity'>{this.props.quantity}</td>
            </tr>
            <tr>
                <th className='HeadTable'>Изображение товара</th>
                <td className='Image'><img className='ImgURL' src={this.props.imgURL}></img></td>
            </tr>
        </table>

    )
  }

}


export default CardProduct;