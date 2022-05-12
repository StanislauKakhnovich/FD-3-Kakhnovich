import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './Ishop.css';

import NameShop from './NameShop';
import HeadTable from './HeadTable';
import Product from './Product';
import CardProduct from './CardProduct';
import AddProduct from './AddProduct';

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
    addNewProduct: false,
    newCode: null,
  }

  saveProductChanged = (newDataProduct, code) => { 
    if (newDataProduct) {
      let arr = this.state.workListProducts;
      arr.forEach((elem, index,arr)=>elem.code === code&&(arr[index]=newDataProduct))
      this.setState({workListProducts: arr});
    }
    this.setState({selectedProductCode: null});
  }

  saveProductNew = (newDataProduct) => { 
    if (newDataProduct) {
      let arr = this.state.workListProducts;
      arr.push(newDataProduct);
      this.setState({workListProducts: arr});
    }
    this.setState({selectedProductCode: null});
    this.setState({addNewProduct: false});
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
    this.setState( {addNewProduct:true} );
    let arr = this.state.workListProducts;
    let codeArr = [];
    arr.forEach(elem => codeArr.push(elem.code));
    let maxCode = Math.max(...codeArr)+1;
    this.setState( {newCode:maxCode} );
    this.setState ({editMode:false, buttonsDeleteNew:false, selectedProductCode: null,});
    
      
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
      {
        this.state.addNewProduct&&
       <AddProduct
        workListProducts={this.state.workListProducts}
        selectedProductEdit={this.state.selectedProductEdit}
        selectedProductCode={this.state.selectedProductCode}
        cbAddSaved={this.saveProductNew}
        editMode={this.state.editMode}
        cbBunButtonsEdit={this.bunButtonsEdit}
        cbBunButtonsDeleteNew={this.bunButtonsDeleteNew}
        newCode={this.state.newCode}
        addNewProduct={this.state.addNewProduct}
       />
      }
      </Fragment>
    );

  }


}


export default Ishop;