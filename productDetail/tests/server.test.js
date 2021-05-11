const express = require('express');

const createServer = require('../server/index.js');
const Post = require('./models/Post'); // new


test('GET /api/products', async () => {
  const post = await Post.create({
    title: 'Post 1',
    content: 'Lorem ipsum',
  });

  await supertest(app)
    .get('/api/products')
    .expect(200)
    .then((response) => {
      // Check the response type and length
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toEqual(1);

      // Check the response data
      expect(response.body[0]._id).toBe(post.id);
      expect(response.body[0].title).toBe(post.title);
      expect(response.body[0].content).toBe(post.content);
    });
});
