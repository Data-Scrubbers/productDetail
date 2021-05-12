/* eslint-disable radix */
const pool = require('./config.js');

const getAllProducts = (req, res) => {
  const count = parseInt(req.params.count) || 5;

  const queryString = 'SELECT * FROM products LIMIT $1';
  pool.query(queryString, [count], (err, results) => {
    if (err) {
      console.log('err retrieving data', err);
    } else {
      res.json(results.rows);
    }
  });
};

const getProductById = (req, res) => {
  const id = parseInt(req.params.product_id);

  const queryString = `SELECT
      products.product_id AS id,
      product_name AS name,
      slogan,
      product_description AS description,
      category,
      default_price,
      jsonb_agg(json_build_object('feature', f.feature, 'value', f.feature_value)) AS features
    FROM products LEFT JOIN features f ON f.product_id = products.product_id WHERE products.product_id = $1 GROUP BY products.product_id`;

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

  const queryString = `SELECT
      styles.style_id AS style_id,
      style_name AS name,
      original_price,
      sale_price,
      default_style AS default,
      jsonb_agg(json_build_object('thumbnail_url', p.thumbnail_url, 'url', p.url)) AS photos,
      jsonb_object_agg(
        s.sku_id, json_build_object('quantity', s.quantity, 'size', s.size)
      ) AS skus
    FROM styles LEFT JOIN photos p ON p.style_id = styles.style_id
    LEFT JOIN skus s ON s.style_id = styles.style_id
    WHERE styles.product_id = $1 GROUP BY styles.style_id`;

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
      console.log(results);
      res.json(results.rows);
    }
  });
};

module.exports = {
  getAllProducts, getProductById, getStyles, getRelated,
};
