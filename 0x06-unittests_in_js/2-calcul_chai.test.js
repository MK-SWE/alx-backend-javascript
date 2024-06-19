// 1-calcul.test
const expect = require("chai").expect;
const calculateNumber = require("./2-calcul_chai");

describe('calculateNumber()', () => {
  it('Test SUM', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.deep.equal(6);
  });
  it('Test SUBTRACT', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.deep.equal(-4);
  });
  it('Test DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.deep.equal(0.2);
  });
  it('Test DIVIDE With Error', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.deep.equal('Error');
  });
});
