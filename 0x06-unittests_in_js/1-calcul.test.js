const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('test calculate number', () => {
  it('checks the rounded sum', () => {
    assert.equal(calculateNumber('SUM', 2, 4), 6);
    assert.equal(calculateNumber('SUM', 2, 4.2), 6);
    assert.equal(calculateNumber('SUM', 2.3, 4.7), 7);
    assert.equal(calculateNumber('SUM', 1.5, 3.5), 5);
    assert.equal(calculateNumber('SUM', -2, 5), 3);
    assert.equal(calculateNumber('SUM', -1, -5), -6);
    assert.equal(calculateNumber('SUM', -1.5, -1.7), -3);
    assert.equal(calculateNumber('SUM', -2, 4.2), 2);
  });

  it('checks the rounded difference', () => {
    assert.equal(calculateNumber('SUBTRACT', 5, 2), 3);
    assert.equal(calculateNumber('SUBTRACT', 3.3, 1), 2);
    assert.equal(calculateNumber('SUBTRACT', 5.4, 1.5), 4);
    assert.equal(calculateNumber('SUBTRACT', 3.7, 1.5), 2);
    assert.equal(calculateNumber('SUBTRACT', -2, 3), -5);
    assert.equal(calculateNumber('SUBTRACT', -4, -1), -3);
    assert.equal(calculateNumber('SUBTRACT', -1.2, -1.4), 0);
    assert.equal(calculateNumber('SUBTRACT', -2, 3.5), -6);
  });

  it('checks the rounded division', () => {
    assert.equal(calculateNumber('DIVIDE', 6, 2), 3);
    assert.equal(calculateNumber('DIVIDE', 7.5, 3), 2.5);
    assert.equal(calculateNumber('DIVIDE', 9.9, 3), 3.3);
    assert.equal(calculateNumber('DIVIDE', 8.4, 2), 4.2);
    assert.equal(calculateNumber('DIVIDE', -6, 3), -2);
    assert.equal(calculateNumber('DIVIDE', -9, -3), 3);
    assert.equal(calculateNumber('DIVIDE', -6.2, -3.4), 2);
    assert.equal(calculateNumber('DIVIDE', -7, 2), -3.5);
    assert.equal(calculateNumber('DIVIDE', -10, 0), 'Error');
  });

  it('checks the NaN number', () => {
    assert.throws(() => calculateNumber('SUM', NaN, 5), {
      name: 'TypeError',
      message: 'Parameters must be numbers'
    });
    assert.throws(() => calculateNumber('SUBTRACT', NaN, 5), {
      name: 'TypeError',
      message: 'Parameters must be numbers'
    });
    assert.throws(() => calculateNumber('DIVIDE', NaN, 5), {
      name: 'TypeError',
      message: 'Parameters must be numbers'
    });
    assert.throws(() => calculateNumber('shhh', NaN, 5), {
      name: 'TypeError',
      message: 'Parameters must be numbers'
    });
  });
});
