const express = require('express');
// const atelier = require('./helpers/atelier');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
// app.use(express.static(path.join(__dirname, './client/dist')));

app.get('/api/products', (req, res) => {
  let endpoint = req.url.substring(15);
  atelier.getEndpoint(endpoint, (error, products) => {
    if (error) {
      console.log('Server Error while retrieving all products:', error);
    } else {
      res.json(products);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});