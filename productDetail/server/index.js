const express = require('express');
// const atelier = require('./helpers/atelier');
const path = require('path');
const bodyParser = require('body-parser');
const getAllProducts = require('../database/queries.js');
const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
// app.use(express.static(path.join(__dirname, './client/dist')));

app.get('/api/*', (req, res) => {
  const endpoint = req.url.substring(14);
  console.log(endpoint);
  getAllProducts(endpoint, (error, products) => {
    if (error) {
      console.log('Server Error while retrieving all products:', error);
    } else {
      res.send(products);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
