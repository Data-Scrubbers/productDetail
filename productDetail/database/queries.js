const pool = require('./config.js');

const getAllProducts = (req, res) => {
  pool.query('SELECT * FROM products LIMIT 5', (err, results) => {
    if (err) {
      console.log('err retrieving data', err);
    } else {
      res.json(results.rows);
    }
  });
};

const getProductById = (req, res) => {
  // eslint-disable-next-line radix
  const id = parseInt(req.params.product_id);

  pool.query('SELECT * FROM products WHERE products.product_id = $1', [id], (err, results) => {
    if (err) {
      console.log('error getting user data', err);
    } else {
      res.json(results.rows);
    }
  });
};

module.exports = { getAllProducts, getProductById };
