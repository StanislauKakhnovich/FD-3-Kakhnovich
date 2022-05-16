import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {
  static propTypes = {
   
  };

  render () {
    return <div className='RainbowFrame'>{this.props.children}</div>
  }
}

export default RainbowFrame;