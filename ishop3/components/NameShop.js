import React from 'react';
import PropTypes from 'prop-types';

import './NameShop.css';

class NameShop extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render () {
    return <caption className='NameShop'>{this.props.name}</caption>
  }
}

export default NameShop;