import { ERROR_MESSAGE } from '../src/constant/message.js';
import {
  validateDivisible,
  validateEmpty,
  validateFindEqual,
  validateLength,
  validateNumber,
  validateRange,
  validateUnique,
} from '../src/utils/validateFn.js';

describe('입력 금액 유효성 검사', () => {
  test('빈 문자열이 아닌 경우', () => {
    const validInput = '12';
    expect(validateEmpty(validInput)).toBe(true);
  });
  test('빈 문자열을 입력한 경우', () => {
    const invalidInput = '';
    try {
      validateEmpty(invalidInput);
    } catch (error) {
      expect(error).toEqual(ERROR_MESSAGE.INVALID_EMPTY_INPUT);
    }
  });

  test('입력값이 숫자인 경우', () => {
    const invalidInput = ['1', '5', '77', '90'];
    invalidInput.forEach((number) => {
      expect(validateNumber(number)).toBe(true);
    });
  });
  test('입력값이 숫자가 아닌경우', () => {
    const invalidInput = ['a', 'b'];
    try {
      validateNumber(invalidInput);
    } catch (error) {
      expect(error).toEqual(ERROR_MESSAGE.INVALID_INPUT_NUMBER);
    }
  });

  test('1000으로 나누어 떨어지는 경우', () => {
    const validInput = [3000, 301000, 50000];
    validInput.forEach((money) => {
      expect(validateDivisible(money)).toBe(true);
    });
  });
  test('1000으로 나누어 떨어지지 않는 경우', () => {
    const invalidInput = [13, 3001, 8888];
    try {
      invalidInput.forEach((money) => {
        validateDivisible(money);
      });
    } catch (error) {
      expect(error).toEqual(ERROR_MESSAGE.INVALID_NON_DIVISIBLE);
    }
  });
});
