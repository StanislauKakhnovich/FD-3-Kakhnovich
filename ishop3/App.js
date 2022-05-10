"use strict";

import React from 'react';
import ReactDOM from 'react-dom';


import Ishop from './components/Ishop';


let nameShop='Интернет-магазин "Все для электротехнических работ"';
import headText from './data/head.json';
import productsArr from './data/products.json';


    ReactDOM.render(
      <Ishop 
      name={nameShop}
      head={headText}
      products={productsArr}
      />
      , document.getElementById('container') 
    );

    