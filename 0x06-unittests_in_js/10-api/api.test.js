const request = require('request');
const expect = require('chai').expect;

describe('Index page', () => {
  const options = {
    url: 'http://localhost:7865/',
    method: 'GET'
  }
  it('Test status code', (done) => {
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('Test response body', (done) => {
    request(options, (err, res, body) => {
      expect(body).to.contain('Welcome to the payment system');
      done();
    });
  });
  it('Test content length', (done) => {
    request(options, (err, res, body) => {
      expect(res.headers['content-length']).to.equal('29');
      done();
    });
  });
});

describe('Cart page', () => {
  const url = 'http://localhost:7865/cart'
  it('returns correct status code when :id is a number', (done) => {
    request(`${url}/12`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.contain('Payment methods for cart 12');
      done();
    });
  });
  it('returns 404 status code when :id is NOT a number', (done) => {
    request(`${url}/hello`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      expect(body).to.not.contain('Payment methods for cart 12');
      done();
    });
  });
});

describe('Payment page', () => {
  const options = {
    url: 'http://localhost:7865/available_payments',
    method: 'GET',
    json: true
  }
  it('Check the available payment methods', (done) => {
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
      done();
    });
  });
});

describe("Login", () => {
  it("check correct status code for request that's sent properly", (done) => {
    const options = {
      url: "http://localhost:7865/login",
      json: true,
      body: {
        userName: 'Mohammed'
      }
    };
    request.post(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it("check correct content for request that's sent properly", (done) => {
    const options = {
      url: "http://localhost:7865/login",
      json: true,
      body: {
        userName: 'Mohammed'
      }
    };
    request.post(options, (err, res, body) => {
      if (err) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(body).to.contain('Welcome Mohammed');
      }
      done();
    });
  });
  it("check correct status code for request that's not sent properly", (done) => {
    const options = {
      url: "http://localhost:7865/login",
      json: true,
      body: {
        usame: 'Mohammed'
      }
    };
    request.post(options, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
