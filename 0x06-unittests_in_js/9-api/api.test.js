const request = require("request");
const assert = require('assert');

describe('Index page', () => {
  const url = 'http://localhost:7865';

  it('Test status code', () => {
    request(url, (err, res, body) => {
      assert.strictEqual(res.statusCode, 200);
    });
  });

  it('Test status code', () => {
    request(url, (err, res, body) => {
      assert.strictEqual(body, 'Welcome to the payment system');
    });
  });
});