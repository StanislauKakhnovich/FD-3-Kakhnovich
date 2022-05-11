import React, { Fragment } from 'react';
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
    selectedProductCard: null,
    selectedProductEdit: null,
    editMode: true,
    buttonsDeleteNew: true,
  }

  saveProductChanged = (newDataProduct, code) => { 

    if (newDataProduct) {
      let arr = this.state.workListProducts;
      for(let i=0; i<arr.length; i++) {
        if(arr[i].code === code) {
          arr[i] = newDataProduct;
        }
      }
      this.setState({workListProducts: arr});
    }
    
    this.setState({selectedProductCode: null});
  }

  productSelected = (code) => {  
    this.setState( {selectedProductCode:code}, this.productLeave);
    this.setState({selectedProductCard: this.state.workListProducts.find(elem => elem.code === code)})
  }

  productLeave = () => {
    if (this.state.selectedProductEdit != this.state.selectedProductCode) this.setState( {selectedProductEdit:null, buttonsDeleteNew:true} );
  }

  productSelectedEdit = (code) => {
    this.setState( {selectedProductEdit:code} );
  }

  productDelete = (code) => {  
    var question = confirm(`Удалить ${code} товар?`);
    if (question) this.setState( {selectedProductCode: null, workListProducts: this.state.workListProducts.filter(elem => elem.code !== code)} );
  }

  bunButtonsEdit = (marker) => {
    this.setState( {editMode:marker} );
  }

  bunButtonsDeleteNew = (marker) => {
    this.setState( {buttonsDeleteNew:marker} );
  }

  productNew = () => {

  }

  render() {

      let productsCode=this.state.workListProducts.map( elem =>
        <Product key={elem.code}  nameProduct={elem.nameProduct} code={elem.code} price={elem.price}
          quantity={elem.quantity} imgURL={elem.imgURL} cbSelected={this.productSelected} cbDelete={this.productDelete}
          selectedProductCode={this.state.selectedProductCode} selectedProductDelete={this.state.selectedProductDelete}
          products={this.state.workListProducts} isSelected={(this.state.selectedProductCode === elem.code)}
          cbEdit={this.productSelectedEdit} editMode={this.state.editMode} buttonsDeleteNew={this.state.buttonsDeleteNew}
          cbBunButtonsDeleteNew={this.bunButtonsDeleteNew}
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
      <input type={'button'} value={'Новый товар'} className ={this.state.buttonsDeleteNew?'ButtonIn':'ButtonOff'} onClick={this.productNew}></input>
      {
        this.state.selectedProductCode && <CardProduct key={this.state.selectedProductCard.code}
        code={this.state.selectedProductCard.code}
        nameProduct={this.state.selectedProductCard.nameProduct}
        price={this.state.selectedProductCard.price}
        quantity={this.state.selectedProductCard.quantity}
        imgURL={this.state.selectedProductCard.imgURL}
        selectedProductEdit={this.state.selectedProductEdit}
        selectedProductCode={this.state.selectedProductCode}
        cbSaved={this.saveProductChanged}
        editMode={this.state.editMode}
        cbBunButtonsEdit={this.bunButtonsEdit}
        cbBunButtonsDeleteNew={this.bunButtonsDeleteNew}
        
        />
      }
      </Fragment>
    );

  }


}


export default Ishop;