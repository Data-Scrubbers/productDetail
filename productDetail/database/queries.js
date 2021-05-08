/* eslint-disable radix */
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
  const id = parseInt(req.params.product_id);

  const queryString = 'SELECT style_id, style_name, sale_price, original_price, default_style FROM styles WHERE product_id = $1';
  pool.query(queryString, [id], (err, results) => {
    if (err) {
      console.log('error getting styles', err);
    } else {
      res.json({
        product_id: id,
        results: results.rows,
      });
    }
  });
};

const getRelated = (req, res) => {
  const id = parseInt(req.params.product_id);

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
