import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './Main.css';

import DoubleButton from './DoubleButton';
import withRainbowFrame from './withRainbowFrame';


class Main extends React.Component {

   state = {
     firstRender: true,
     caption1: 'однажды',
     caption2: 'пору',
   }

   changeRender = (arg) => {
    arg
    ?
    this.setState( {caption1: 'однажды', caption2: 'пору', firstRender: true} )
    :
    this.setState( {caption1: 'я из лесу', caption2: 'мороз', firstRender: false} );
  } 

  render() {

    let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
    let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton)

  return (
    <div className='Main'>
    <FramedDoubleButton caption1={this.state.caption1} caption2={this.state.caption2} cbPressed={this.changeRender}>{this.state.firstRender?'в студеную зимнюю пору':'вышел, был сильный мороз'}</FramedDoubleButton>
    </div>
  );
  }
}

export default Main;