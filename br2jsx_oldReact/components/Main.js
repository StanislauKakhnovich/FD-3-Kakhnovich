import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './Main.css';

import BR2JSX from './BR2JSX';


class Main extends React.Component {

  // static propTypes = {
  // }

  // state = {
  // }


  render() {

    
      let text="первый<br>второй<br/>третий<br/>последний";
      return(
        <BR2JSX text={text}>{this.props.key}</BR2JSX>
      ) ;
    }
  }

export default Main;