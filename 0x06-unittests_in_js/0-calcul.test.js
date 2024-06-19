// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("calculateNumber()", () => {
    it(`checking if numbers round`, () => {
      assert.strictEqual(calculateNumber(1, 2), 3);
    });
    it(`checking if numbers round`, () => {
      assert.strictEqual(calculateNumber(1.4, 2.2), 3);
    });
    it(`checking if numbers round`, () => {
      assert.strictEqual(calculateNumber(1.6, 2.7), 5);
    });
    it(`checking if numbers round`, () => {
      assert.strictEqual(calculateNumber(0, 0), 0);
    });
    it(`checking if numbers round`, () => {
      assert.strictEqual(calculateNumber(-1.6, -1.7), -4);
    });
    it(`checking if numbers round`, () => {
      assert.strictEqual(calculateNumber(-1.4, -1.3), -2);
    });
});
