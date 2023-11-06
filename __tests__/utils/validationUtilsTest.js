import validationUtils from '../../src/utils/validationUtils.js';

describe('숫자형 체크', () => {
  test('숫자가 아닌 값이 들어가면 예외를 발생시킨다.', () => {
    const notANumber = NaN;
    const undefinedValue = undefined;

    expect(() => validationUtils.checkNumber(notANumber)).toThrow('[ERROR]');
    expect(() => validationUtils.checkNumber(undefinedValue)).toThrow(
      '[ERROR]',
    );
  });

  test('숫자값이 들어가면 예외를 발생시키지 않는다.', () => {
    const number = 1;

    expect(() => validationUtils.checkNumber(number)).not.toThrow('[ERROR]');
  });
});

describe('범위 체크', () => {
  test('1부터 45까지가 아닌 값이 들어가면 예외를 발생시킨다.', () => {
    const number = 46;

    expect(() => validationUtils.checkRange(number)).toThrow('[ERROR]');
  });

  test('1부터 45까지의 값이 들어가면 예외를 발생시키지 않는다.', () => {
    const number = 1;

    expect(() => validationUtils.checkRange(number)).not.toThrow('[ERROR]');
  });
});
