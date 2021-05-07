const pool = require('./config.js');

const getAllProducts = (endpoint, cb) => {
  console.log(endpoint);
  if (endpoint === 'products') {
    pool.query('SELECT * FROM products LIMIT 5', (err, results) => {
      if (err) {
        console.log('err retrieving data', err);
      } else {
        cb(null, results.rows);
      }
    });
  }
};

module.exports = getAllProducts;
