const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./4-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
  let Spy;

  beforeEach(() => {
    Spy = sinon.spy(console, 'log');  
  });

  afterEach(() => {
    Spy.restore()
  });

  it('Test sendPaymentRequestToApi(100, 20)', () => {
    sendPaymentRequestToApi(100, 20);

    assert(Spy.calledWith('The total is: 120'));
    assert(Spy.calledOnce);
  });

  it('Test sendPaymentRequestToApi(10, 10)', () => {

    sendPaymentRequestToApi(10, 10);
    assert(Spy.calledWith('The total is: 20'));
    assert(Spy.calledOnce);
  });
});
