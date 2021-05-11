/* eslint-disable no-console */
const express = require('express');
// const atelier = require('./helpers/atelier');
// const path = require('path');
const bodyParser = require('body-parser');
const queries = require('../database/queries.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(express.static('/Users/alisonclowes/HR_SEI2/SDC/FEC/client/dist'));

app.get('/api/products', queries.getAllProducts);

app.get('/api/products/:product_id', queries.getProductById);

app.get('/api/products/:product_id/styles', queries.getStyles);

app.get('/api/products/:product_id/related', queries.getRelated);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

module.exports = app;
