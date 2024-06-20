const request = require("request");
const expect = require("chai").expect;

describe("Index page", () => {
  const options = {
    url: "http://localhost:7865/",
    method: "GET"
  }
  it("Test status code", (done) => {
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it("Test response body", (done) => {
    request(options, (err, res, body) => {
      expect(body).to.contain("Welcome to the payment system");
      done();
    });
  });
  it("Test content length", (done) => {
    request(options, (err, res, body) => {
      expect(res.headers['content-length']).to.equal('29');
      done();
    });
  });
});
