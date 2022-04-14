/* globals expect it */
const app = require('../app');
const supertest = require('supertest');

const request = supertest(app);

it('Testing to see if Jest works', () => {
  expect(1).toBe(1);
});

it('gets the test endpoint', async done => {

  try {
    const response = await request.get('/test');
    expect(response.status).toBe(200);
    // expect(response.body.url).toBe('/test');
    done();
  } catch (err) {
    console.log(err);
    done();
  }
});