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

  const queryString = 'select row_to_json(row) from(SELECT * FROM products LEFT JOIN features ON features.product_id = products.product_id WHERE products.product_id = $1) row;';

  pool.query(queryString, [id], (err, results) => {
    if (err) {
      console.log('error getting user data', err);
    } else {
      res.json(results.rows);
    }
  });
};

const getStyles = (req, res) => {
  const id = req.params.product_id;

  const queryString = '';
  pool.query(queryString, [id], (err, results) => {
    if (err) {
      console.log('error getting styles', err);
    } else {
      res.json(results.rows);
    }
  });
};

const getRelated = (req, res) => {
  const id = req.params.product_id;
  console.log('got here');
  const queryString = 'SELECT related_product_id FROM related WHERE product_id = $1';

  pool.query(queryString, [id], (err, results) => {
    if (err) {
      console.log('err retrieving related', err);
    } else {
      res.json(results.rows);
    }
  });
};

module.exports = {
  getAllProducts, getProductById, getStyles, getRelated,
};
