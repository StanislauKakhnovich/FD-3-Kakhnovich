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

  saveChanged = () => {
      if(this.state.newName&&this.state.newPrice&&this.state.newQuantity&&this.state.newURL&&!this.state.controlEmpty&&
        !this.state.controlName&&!this.state.controlPrice&&!this.state.controlQuantity&&!this.state.controlURLLatin&&
        !this.state.controlURLFormat) {
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
                <div className="HeadProduct">?????????????????????????? ??????????</div>
                <div className="??learfix">
                    <label htmlFor='codeProduct'>?????? ????????????:</label>
                    <div className="Registration">
                        <input  id='codeProduct' type='text' name='codeProduct' readOnly value={this.props.code}/>
                    </div>
                </div>
                <div className="??learfix">
                    <label htmlFor='nameProduct'>???????????????? ????????????:</label>
                    <div className="Registration">
                        <input  id='nameProduct' type='text' name='nameProduct' defaultValue={this.props.nameProduct} onChange={this.productNameChanged}/>
                           {
                            !this.state.newName&&
                            <div className="ErrorValid">???????? ???? ???????????? ???????? ????????????</div>
                           }
                           {
                            this.state.controlName&&
                            <div className="ErrorValid">?? ???????????????? ???????????? ???????????? ???????? ???? ?????????? 4 ????????????</div>
                           }
                            
                    </div>
                </div>
                <div className="??learfix">
                    <label htmlFor='priceProduct'>???????? ????????????, ??????:</label>
                    <div className="Registration">
                        <input  id='priceProduct' type='text' name='priceProduct' defaultValue={this.props.price} onChange={this.productPriceChanged}/>
                            {
                            !this.state.newPrice&&
                            <div className="ErrorValid">???????? ???? ???????????? ???????? ????????????</div>
                            }
                            {
                            this.state.controlPrice&&
                            <div className="ErrorValid">???????????? ???????? ??????????</div>
                            }
                        
                    </div>
                </div>
                <div className="??learfix">
                    <label htmlFor='quantity'>????????????????????, ????:</label>
                    <div className="Registration">
                        <input  id='quantity' type='text' name='quantity' defaultValue={this.props.quantity} onChange={this.productQuantityChanged}/>
                            {
                            !this.state.newQuantity&&
                            <div className="ErrorValid">???????? ???? ???????????? ???????? ????????????</div>
                            }
                            {
                            this.state.controlQuantity&&
                            <div className="ErrorValid">???????????? ???????? ??????????</div>
                            }
                    </div>
                </div>
                <div className="??learfix">
                    <label htmlFor='urlProduct'>URL ?????????????????????? ????????????:</label>
                    <div className="Registration">
                        <input  id='urlProduct' type='text' name='urlProduct' defaultValue={this.props.imgURL} onChange={this.productURLChanged}/>
                            {
                            !this.state.newURL&&
                            <div className="ErrorValid">???????? ???? ???????????? ???????? ????????????</div>
                            }
                            {
                            this.state.controlURLLatin&&
                            <div className="ErrorValid">???????????????? ?????????? ???????????? ???????? ???? ????????????????.</div>
                            }
                            {
                            this.state.controlURLFormat&&
                            <div className="ErrorValid">???????? ???????????? ???????? ?? ?????????????? jpg ?????? png</div>
                            }
                        
                    </div>
                </div>
                <button className={`${this.state.newName&&this.state.newPrice&&this.state.newQuantity&&this.state.newURL&&
                    !this.state.controlEmpty&&!this.state.controlName&&!this.state.controlPrice&&!this.state.controlQuantity&&
                    !this.state.controlURLLatin&&!this.state.controlURLFormat
                    ?'ButtonIn'
                    :'ButtonOff'} ${'EditButtons'}`}  onClick={this.saveChanged} value>??????????????????
                </button>

                <button className={`${'ButtonIn'} ${'EditButtons'}`} onClick={this.cancelChanged}>????????????</button>
            </div>
    )
  }

}

export default EditProduct;