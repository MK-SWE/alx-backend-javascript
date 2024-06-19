// 1-calcul.test

const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber()', () => {
  it('Test SUM', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('Test SUBTRACT', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('Test DIVIDE', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('Test DIVIDE With Error', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});