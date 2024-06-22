const chai = require('chai');
const expect = chai.expect;

const sinon = require('sinon');
const utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('test the send payment request method', () => {
    // Stub calculateNumber function from utils
    const funStub = sinon.stub(utils, 'calculateNumber');
    funStub.returns(10); // Stub the return value of calculateNumber to 10

    // Call the function under test (sendPaymentRequestToApi)
    const reApi = sendPaymentRequestToApi(100, 20);

    // Spy on console.log to capture its output
    const conSpy = sinon.spy(console, 'log');

    // Assert that console.log was called with the expected message
    expect(conSpy.calledWithExactly('The total is: 10')).to.be.true;

    // Assert that the return value from sendPaymentRequestToApi matches the return value of calculateNumber
    expect(utils.calculateNumber('SUM', 100, 20)).to.equal(reApi);

    // Restore the original function and console.log to avoid affecting other tests
    funStub.restore();
    conSpy.restore();
  });
});
