import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


let withRainbowFrame= colors => Comp => props =>
  {
    let control;
     colors.forEach((elem, i)=>{
      if(i==0){
        control = <div key={i}  style={{border:"solid 3px "+elem,padding:"5px"}}><Comp {...props} /></div>;
      } 
      else {
        control = <div key={i}  style={{border:"solid 3px "+elem,padding:"5px"}}>{control}</div>;
      } 
    })

    return control;
  }
;


export default withRainbowFrame;

