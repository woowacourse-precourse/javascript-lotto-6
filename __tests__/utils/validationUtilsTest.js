import validationUtils from '../../src/utils/validationUtils.js';

describe('숫자형 체크', () => {
  test('숫자가 아닌 값이 들어가면 예외를 발생시킨다.', () => {
    const NOT_A_NUMBER = NaN;
    const UNDEFINED_VALUE = undefined;

    expect(() => {
      validationUtils.checkNumber(NOT_A_NUMBER);
    }).toThrow('[ERROR]');
    expect(() => {
      validationUtils.checkNumber(UNDEFINED_VALUE);
    }).toThrow('[ERROR]');
  });

  test('숫자값이 들어가면 예외를 발생시키지 않는다.', () => {
    const NUMBER = 1;

    expect(() => {
      validationUtils.checkNumber(NUMBER);
    }).not.toThrow('[ERROR]');
  });
});

describe('범위 체크', () => {
  test('1부터 45까지가 아닌 값이 들어가면 예외를 발생시킨다.', () => {
    const NUMBER = 46;

    expect(() => {
      validationUtils.checkRange(NUMBER);
    }).toThrow('[ERROR]');
  });

  test('1부터 45까지의 값이 들어가면 예외를 발생시키지 않는다.', () => {
    const NUMBER = 1;

    expect(() => {
      validationUtils.checkRange(NUMBER);
    }).not.toThrow('[ERROR]');
  });
});
