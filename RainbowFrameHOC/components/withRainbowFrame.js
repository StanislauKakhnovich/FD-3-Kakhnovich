import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


let withRainbowFrame= colors => Comp => props =>
  {
    let control=<Comp {...props} />;
     colors.forEach((elem, i)=>{
        control = <div key={i}  style={{border:"solid 3px "+elem,padding:"5px"}}>{control}</div>;
    })

    return control;
  }
;


export default withRainbowFrame;

