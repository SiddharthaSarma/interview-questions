const stringReverseInPlace = require('./index');

describe('Test for string reverse in place', () => {
  it('should reverse the string in place', () => {
    expect(stringReverseInPlace('I am a good boy')).toEqual('I ma a doog yob');
  });
});
