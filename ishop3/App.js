"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var Ishop = require('./components/Ishop');

var nameShop='Интернет-магазин "Все для электротехнических работ"';
    var headText={headNameProduct: 'Наименование продукции', headPrice: 'Цена, руб', headImg: 'Изображение товара', headQuantity: 'Количество, шт', headControl: 'Контроль'};
    var productsArr=[ 
      {nameProduct:'АВТ. ВЫКЛЮЧАТЕЛЬ PL4-C10/3, 3P, 10A, ХАР-КА C, 4.5KA, 3M',code:1,price:28.95,imgURL:'./image/PL-4-3.jpg',quantity:1}, 
      {nameProduct:'АВТ. ВЫКЛЮЧАТЕЛЬ PL4-C16/1, 1P, 16A, ХАР-КА C, 4.5KA, 1M',code:2,price:7.75,imgURL:'./image/PL-4-1.jpg',quantity:1331}, 
      {nameProduct:'АВТ. ВЫКЛЮЧАТЕЛЬ PL4-C16/1, 1P, 16A, ХАР-КА C, 4.5KA, 1M',code:3,price:7.67,imgURL:'./image/PL-4-1.jpg',quantity:173},
    ];
    
    ReactDOM.render(
      React.createElement(Ishop,{name:nameShop,head:headText,products:productsArr}), 
      document.getElementById('container') 
    );