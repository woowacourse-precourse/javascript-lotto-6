import InputValidator from '../src/model/InputValidator';

describe('InputValidator', () => {
  it('정수 인지 확인', () => {
    // Valid input
    expect(() => InputValidator.validateNumberType('123')).not.toThrow();
    expect(() => InputValidator.validateNumberType('456')).not.toThrow();

    // Invalid input
    expect(() => InputValidator.validateNumberType('abc')).toThrow();
    expect(() => InputValidator.validateNumberType('12a34')).toThrow();
    expect(() => InputValidator.validateNumberType('-1000')).toThrow();
  });

  it('천원단위인지 확인', () => {
    // Valid input
    expect(() => InputValidator.priceUnitCheck('1000')).not.toThrow();
    expect(() => InputValidator.priceUnitCheck('5000')).not.toThrow();

    // Invalid input
    expect(() => InputValidator.priceUnitCheck('1500')).toThrow();
    expect(() => InputValidator.priceUnitCheck('1234')).toThrow();
  });
});
