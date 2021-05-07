const { Pool } = require('pg');

const pool = new Pool({
  user: 'alisonclowes',
  host: 'localhost',
  database: 'productdetail',
  port: 3000,
});

module.exports = pool;
