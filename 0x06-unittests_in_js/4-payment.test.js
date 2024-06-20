const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./4-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
  it('Test Utils.calulateNumber', () => {
    const utilsStub = sinon.stub(Utils, 'calculateNumber');
    utilsStub.returns(10);

    const spy = sinon.spy(console, 'log');
    
    sendPaymentRequestToApi(100, 20);

    assert(utilsStub.calledWith('SUM', 100, 20));
    assert(spy.calledWith('The total is: 10'));

    utilsStub.restore();
    spy.restore();
  });
});
