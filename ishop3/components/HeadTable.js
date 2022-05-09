import React from 'react';
import PropTypes from 'prop-types';

import './HeadTable.css';

class HeadTable extends React.Component {
  static propTypes = {
      headNameProduct: PropTypes.string.isRequired,
      headPrice: PropTypes.string.isRequired,
      headImg: PropTypes.string.isRequired,
      headQuantity: PropTypes.string.isRequired,
      headControl: PropTypes.string.isRequired,
  };

  render () {
    return (
      <thead className='HeadTable'>
        <tr>
          <th className='HeadNameProduct'>{this.props.headNameProduct}</th>
          <th className='HeadPrice'>{this.props.headPrice}</th>
          <th className='HeadQuantity'>{this.props.headQuantity}</th>
          <th className='HeadImg'>{this.props.headImg}</th>
          <th className='HeadControl'>{this.props.headControl}</th>
        </tr>
        
      </thead>
    )
  }
}


export default HeadTable;