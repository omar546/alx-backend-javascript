const assert = require('assert');
const mocha = require('mocha');

const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return sum of integers', () => {
    assert.strictEqual(calculateNumber(5, 7), 12);
    assert.strictEqual(calculateNumber(-4, -2), -6);
    assert.strictEqual(calculateNumber(10, -5), 5);
  });

  it('should round floats', () => {
    assert.strictEqual(calculateNumber(2.5, 3.7), 6);
    assert.strictEqual(calculateNumber(1.9, 3.2), 5);
    assert.strictEqual(calculateNumber(1.1, 3.7), 5);
    assert.strictEqual(calculateNumber(0.5, 0), 1);
    assert.strictEqual(calculateNumber(1.8, -4.2), -2);
  });

  it('should return the rounded number if only one is provided', () => {
    assert.strictEqual(calculateNumber(3.3), 3);
    assert.strictEqual(calculateNumber(6.9), 7);
  });

  it('should cast non-numbers into numbers', () => {
    assert.strictEqual(calculateNumber(false, '5'), 5);
    assert.strictEqual(calculateNumber(2, '4.6'), 7);
    assert.strictEqual(calculateNumber('2.5', 3.3), 6);
  });

  it('should throw typeerror if either param cannot be coerced to a number', () => {
    assert.throws(() => calculateNumber('world'), {
      name: 'TypeError',
      message: 'Parameters must be numbers'
    });
    assert.throws(() => calculateNumber(1.8, 'cat'), {
      name: 'TypeError',
      message: 'Parameters must be numbers'
    });
  });
});
