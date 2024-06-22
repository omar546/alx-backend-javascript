const chai = require('chai');
const expect = chai.expect;

const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let conSpy;

  beforeEach(() => {
    conSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    conSpy.restore();
  });

  it('test the send Payment Request with 100, 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(conSpy.calledWithExactly('The total is: 120')).to.be.true;
    expect(conSpy.calledOnce).to.be.true; // Corrected assertion
  });

  it('test the send Payment Request with 10, 10', () => {
    sendPaymentRequestToApi(10, 10);

    expect(conSpy.calledWithExactly('The total is: 20')).to.be.true;
    expect(conSpy.calledOnce).to.be.true; // Corrected assertion
  });

});
