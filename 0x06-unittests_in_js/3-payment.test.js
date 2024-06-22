const chai = require('chai');
const expect = chai.expect;

const sinon = require('sinon');
const utils = require('./utils');  // Assuming this is where calculateNumber is imported from
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('test the send payment request method', () => {
    // Spy on the calculateNumber function from utils
    const funSpy = sinon.spy(utils, 'calculateNumber');

    // Call the function under test (sendPaymentRequestToApi)
    const reApi = sendPaymentRequestToApi(100, 20);

    // Assert that calculateNumber was called exactly once with the expected arguments
    expect(funSpy.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);

    // Assert that the return value from sendPaymentRequestToApi matches the return value of calculateNumber
    expect(utils.calculateNumber('SUM', 100, 20)).to.equal(reApi);

    // Restore the original function to avoid affecting other tests
    funSpy.restore();
  });
});
