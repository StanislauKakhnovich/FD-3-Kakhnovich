import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {
  static propTypes = {
    colors: PropTypes.array,
  };
  state = {
    colors: this.props.colors,
  }

  render() {

    return (
        <div style={{border:"solid 3px "+this.state.colors[6],padding:"5px"}}>
        <div style={{border:"solid 3px "+this.state.colors[5],padding:"5px"}}>
          <div style={{border:"solid 3px "+this.state.colors[4],padding:"5px"}}>
            <div style={{border:"solid 3px "+this.state.colors[3],padding:"5px"}}>
              <div style={{border:"solid 3px "+this.state.colors[2],padding:"5px"}}>
                <div style={{border:"solid 3px "+this.state.colors[1],padding:"5px"}}>
                  <div style={{border:"solid 3px "+this.state.colors[0],padding:"5px"}}>
                    <div className='RainbowText'>{this.props.children}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default RainbowFrame;