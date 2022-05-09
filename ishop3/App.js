"use strict";

import React from 'react';
import ReactDOM from 'react-dom';


import Ishop from './components/Ishop';


let nameShop='Интернет-магазин "Все для электротехнических работ"';
import headText from './info/head.json';
import productsArr from './info/products.json';


    ReactDOM.render(
      <Ishop 
      name={nameShop}
      head={headText}
      products={productsArr}
      />
      , document.getElementById('container') 
    );

    