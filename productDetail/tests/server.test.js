/* eslint-disable no-undef */
const supertest = require('supertest');
const Pool = require('pg').Pool;
const app = require('../server/index.js');

let pool;

beforeAll(async () => {
  pool = await new Pool({
    user: 'alisonclowes',
    host: 'localhost',
    database: 'productdetail',
    password: '',
    port: 5432,
  });
});

afterAll(async () => () => { pool.end(); });

test('GET /api/products', async () => {
  await supertest(app)
    .get('/api/products')
    .expect(200)
    .then((response) => {
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toEqual(5);
    });
});

test('GET /api/products/:product_id', async () => {
  await supertest(app)
    .get('/api/products/50000')
    .expect(200)
    .then((response) => {
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body[0].id).toEqual(50000);
      expect(Array.isArray(response.body[0].features)).toBeTruthy();
    });
});

test('GET /api/products/:product_id/styles', async () => {
  await supertest(app)
    .get('/api/products/50000/styles')
    .expect(200)
    .then((response) => {
      expect(response.body.product_id).toEqual(50000);
      expect(Array.isArray(response.body.results)).toBeTruthy();
      expect(Array.isArray(response.body.results[0].photos)).toBeTruthy();
      expect(Array.isArray(response.body.results[0].skus)).toBeFalsy();
      expect(typeof response.body.results[0].skus === 'object').toBeTruthy();
    });
});

test('GET /api/products/:product_id/related', async () => {
  await supertest(app)
    .get('/api/products/50000/related')
    .expect(200)
    .then((response) => {
      expect(Array.isArray(response.body)).toBeTruthy();
    });
});
