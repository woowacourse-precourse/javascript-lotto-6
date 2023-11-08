import ERROR_MESSAGES from '../../src/constants/message/error';
import validationUtils from '../../src/services/utils/validation';

describe('유효성검사 유틸 테스트', () => {
  test('isStringToThrow Test', () => {
    const number = 3;
    expect(() => validationUtils.isStringToThrow(number)).toThrow(
      ERROR_MESSAGES.stringType,
    );
  });

  test('isInteger Test', () => {
    const str = 'str';
    expect(() => validationUtils.isIntegerToThrow(str)).toThrow(
      ERROR_MESSAGES.numberType,
    );
  });

  test('isArrayToThrow Test', () => {
    const str = 'str';
    expect(() => validationUtils.isArrayToThrow(str)).toThrow(
      ERROR_MESSAGES.arrayType,
    );
  });

  test('isObject Test', () => {
    const str = 'str';
    expect(() => validationUtils.isObject(str)).toThrow(
      ERROR_MESSAGES.objectType,
    );
  });

  test('isArrayValueTypeNumberToThrow Test', () => {
    const numbers = [1, 2, 3, 4, 5, '6'];
    expect(() =>
      validationUtils.isArrayValueTypeNumberToThrow(numbers),
    ).toThrow(ERROR_MESSAGES.notNumberArray);
  });

  test('zeroIndexValueNotZero Test', () => {
    const str = '01000';
    expect(() => validationUtils.zeroIndexValueNotZero(str)).toThrow(
      ERROR_MESSAGES.stringFirstCharactorZero,
    );
  });

  test('checkStringLength Test', () => {
    const str = '123';
    expect(() => validationUtils.checkStringLength(str)).toThrow(
      ERROR_MESSAGES.numberMaxLength,
    );
  });

  test('checkRange Test', () => {
    const outRankge = 46;
    expect(() => validationUtils.checkRange(outRankge)).toThrow(
      ERROR_MESSAGES.outOfRange,
    );
  });

  test('checkArrayDuplicate Test', () => {
    const duplicate = [1, 1, 1, 1, 1, 1];
    expect(() => validationUtils.checkArrayDuplicate(duplicate)).toThrow(
      ERROR_MESSAGES.duplicate,
    );
  });
});
