import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './Main.css';

import DoubleButton from './DoubleButton';
import withRainbowFrame from './withRainbowFrame';


class Main extends React.Component {

  // static propTypes = {
  // }

   state = {
     firstRender: true,
   }

   changeFirstRender = (boolValue) => {
    this.setState( {firstRender:boolValue} );
  } 

  render() {

    let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
    let caption1 = ['однажды', 'пору'];
    let caption2 = ['я из лесу', 'мороз'];
    let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton)

  return (
    <div className='Main'>
    <FramedDoubleButton caption1={caption1} caption2={caption2} firstRender={this.state.firstRender} cbPressed={this.changeFirstRender}>{this.state.firstRender?'в студеную зимнюю пору':'вышел, был сильный мороз'}</FramedDoubleButton>
    </div>
  );
  }
}

export default Main;