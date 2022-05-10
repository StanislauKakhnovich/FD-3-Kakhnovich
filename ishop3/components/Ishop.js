﻿import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './Ishop.css';

import NameShop from './NameShop';
import HeadTable from './HeadTable';
import Product from './Product';
import CardProduct from './CardProduct';

class Ishop extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    head: PropTypes.object.isRequired,
    head:  PropTypes.shape({
      headNameProduct: PropTypes.string.isRequired,
      headPrice: PropTypes.string.isRequired,
      headImg: PropTypes.string.isRequired,
      headQuantity: PropTypes.string.isRequired,
      headControl: PropTypes.string.isRequired,
    }),

    products: PropTypes.array.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        nameProduct: PropTypes.string.isRequired,
        code: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        imgURL: PropTypes.string.isRequired,
      })
    ),
  }

  state = {
    selectedProductCode: null,
    workListProducts: this.props.products,
    isSelected: false,
    selectedProduct: null,

  }

  productSelected = (code) => {  
    this.setState( {selectedProductCode:code} );
    this.setState({selectedProduct: this.state.workListProducts.find(elem => elem.code === code)})
  }

  productDelete = (code) => {  
    var question = confirm(`Удалить ${code} товар?`);
    if (question) this.setState( {workListProducts: this.state.workListProducts.filter(elem => elem.code !== code)} );
  }

  productNew = () => {

  }

  render() {

      let productsCode=this.state.workListProducts.map( elem =>
        <Product key={elem.code}  nameProduct={elem.nameProduct} code={elem.code} price={elem.price}
          quantity={elem.quantity} imgURL={elem.imgURL} cbSelected={this.productSelected} cbDelete={this.productDelete}
          selectedProductCode={this.state.selectedProductCode} selectedProductDelete={this.state.selectedProductDelete}
          products={this.state.workListProducts} isSelected={(this.state.selectedProductCode === elem.code)}
        />
      );

    return (
      <Fragment>
      <table className='Ishop'>
      <NameShop name={this.props.name}/>
      <HeadTable headNameProduct={this.props.head.headNameProduct} headPrice={this.props.head.headPrice}
        headImg={this.props.head.headImg} headQuantity={this.props.head.headQuantity} headControl={this.props.head.headControl}
      />
      <tbody className='Products'>{productsCode}</tbody>
      </table>
      <input type={'button'} value={'Новый товар'} className ='NewProductButton' onClick={this.productNew}></input>
      {
        this.state.selectedProductCode && <CardProduct key={this.state.selectedProduct.code}
        code={this.state.selectedProduct.code}
        nameProduct={this.state.selectedProduct.nameProduct}
        price={this.state.selectedProduct.price}
        quantity={this.state.selectedProduct.quantity}
        imgURL={this.state.selectedProduct.imgURL}
        />
      }
      </Fragment>
    );

  }


}


export default Ishop;