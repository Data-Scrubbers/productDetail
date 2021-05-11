/* eslint-disable no-undef */
const supertest = require('supertest');
const app = require('../server/index.js');

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
