import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';

class Product extends React.Component {

  static propTypes = {
      isSelected: PropTypes.bool.isRequired,
      cbSelected: PropTypes.func.isRequired,
      cbDelete: PropTypes.func.isRequired,
      cbEdit: PropTypes.func.isRequired,
      editMode: PropTypes.bool.isRequired,
      buttonsDeleteNew: PropTypes.bool.isRequired,
      selectedProductCode: PropTypes.number,
      workListProducts: PropTypes.array.isRequired,
      workListProducts: PropTypes.arrayOf(
        PropTypes.shape({
          nameProduct: PropTypes.string.isRequired,
          code: PropTypes.number.isRequired,
          price: PropTypes.number.isRequired,
          quantity: PropTypes.number.isRequired,
          imgURL: PropTypes.string.isRequired,
        })
      )
  }

  productClicked = (EO) => {
    if (this.props.cbSelected&&this.props.editMode)  this.props.cbSelected(this.props.code);
  }

  productDelete = (EO) => {
    EO.stopPropagation();
    if (this.props.cbDelete&&this.props.editMode&&this.props.buttonsDeleteNew) this.props.cbDelete(this.props.code);
  }

  productEdit = (EO) => {
    if (this.props.cbEdit&&this.props.editMode) this.props.cbEdit(this.props.code);
    if (this.props.cbBunButtonsDeleteNew) this.props.cbBunButtonsDeleteNew(false);


  }

  render() {
    return (
      <tr className={`${'Product'} ${this.props.isSelected ? 'Selected' : 'Unselected'}`} onClick={this.productClicked}>
        <td className='NameProduct'>{this.props.nameProduct}</td>
        <td className='Price'>{this.props.price}</td>
        <td className='Quantity'>{this.props.quantity}</td>
        <td className='Image'>
          <img className='ImgURL' src={this.props.imgURL}></img>
        </td>
        <td className='Control'>
          <input type={'button'} value={'Редактировать'} className ={this.props.editMode?'ButtonIn':'ButtonOff'} onClick={this.productEdit}></input>
          <input type={'button'} value={'Удалить'} className ={this.props.buttonsDeleteNew?'ButtonIn':'ButtonOff'} onClick={this.productDelete}></input>
        </td>

      </tr>
    )
  }

}


export default Product;
