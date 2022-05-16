import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';

class BR2JSX extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  };
  state = {
    text: this.props.text,
  }

  render() {
    let content = this.state.text;
    return (
        <div className='BR2JSX'>{content}</div>
    );
  }
}


export default BR2JSX;