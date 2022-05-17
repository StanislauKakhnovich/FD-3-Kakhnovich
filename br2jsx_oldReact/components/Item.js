import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './Item.css';

class Item extends React.Component {
  static propTypes = {
  }

  render() {
    return this.props.item
  }
}


export default Item;