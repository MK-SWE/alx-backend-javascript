const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
  it('Test Utils.calulateNumber', () => {
    const utilsSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    assert(utilsSpy.calledWith('SUM', 100, 20));
    utilsSpy.restore();
  });
});
