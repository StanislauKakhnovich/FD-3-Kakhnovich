import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './Main.css';

import RainbowFrame from './RainbowFrame';


class Main extends React.Component {

  static propTypes = {
  }

  state = {
  }

  render() {

    let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
  return (
    <RainbowFrame colors={colors}>
      Hello!
    </RainbowFrame>
  );
  }
}

export default Main;