const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('test calculate number', () => {
  it('checks the rounded sum', () => {
    expect(calculateNumber('SUM', 5, 7)).to.equal(12);
    expect(calculateNumber('SUM', 2, 4.2)).to.equal(6);
    expect(calculateNumber('SUM', 2.3, 4.7)).to.equal(7);
    expect(calculateNumber('SUM', 1.5, 3.5)).to.equal(5);
    expect(calculateNumber('SUM', -2, 5)).to.equal(3);
    expect(calculateNumber('SUM', -1, -5)).to.equal(-6);
    expect(calculateNumber('SUM', -1.5, -1.7)).to.equal(-3);
    expect(calculateNumber('SUM', -2, 4.2)).to.equal(2);
  });

  it('checks the rounded difference', () => {
    expect(calculateNumber('SUBTRACT', 5, 2)).to.equal(3);
    expect(calculateNumber('SUBTRACT', 3.3, 1)).to.equal(2);
    expect(calculateNumber('SUBTRACT', 5.4, 1.5)).to.equal(4);
    expect(calculateNumber('SUBTRACT', 3.7, 1.5)).to.equal(2);
    expect(calculateNumber('SUBTRACT', -2, 3)).to.equal(-5);
    expect(calculateNumber('SUBTRACT', -4, -1)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', -1.2, -1.4)).to.equal(0);
    expect(calculateNumber('SUBTRACT', -2, 3.5)).to.equal(-6);
  });

  it('checks the rounded division', () => {
    expect(calculateNumber('DIVIDE', 6, 2)).to.equal(3);
    expect(calculateNumber('DIVIDE', 7.5, 3)).to.equal(2.5);
    expect(calculateNumber('DIVIDE', 9.9, 3)).to.equal(3.3);
    expect(calculateNumber('DIVIDE', 8.4, 2)).to.equal(4.2);
    expect(calculateNumber('DIVIDE', -6, 3)).to.equal(-2);
    expect(calculateNumber('DIVIDE', -9, -3)).to.equal(3);
    expect(calculateNumber('DIVIDE', -6.2, -3.4)).to.equal(2);
    expect(calculateNumber('DIVIDE', -7, 2)).to.equal(-3.5);
    expect(calculateNumber('DIVIDE', -10, 0)).to.equal('Error');
  });

  it('checks the NaN number', () => {
    expect(() => calculateNumber('SUM', NaN, 5)).to.throw();
    expect(() => calculateNumber('SUBTRACT', NaN, 5)).to.throw();
    expect(() => calculateNumber('DIVIDE', NaN, 5)).to.throw();
    expect(() => calculateNumber('shhh', NaN, 5)).to.throw();
  });
});
