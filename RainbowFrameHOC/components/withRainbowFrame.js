import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


let withRainbowFrame= colors => Comp => props =>
  {
    let control;
     let arr = colors.map((elem, i)=>{
      if(i==0){
        control = <div key={i}  style={{border:"solid 3px "+elem,padding:"5px"}}><Comp {...props} /></div>;
          return control
      } 
      else {
        control = <div key={i}  style={{border:"solid 3px "+elem,padding:"5px"}}>{control}</div>;
      } return control
    })

    return (
      <div>{arr[arr.length-1]}</div>
    );
  }
;


export default withRainbowFrame;

