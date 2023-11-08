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

describe('로또 번호 유효성 검사', () => {
  test('로또 번호가 6개인 경우', () => {
    const validInput = [1, 2, 46, 100, 0, 12];
    expect(validateLength(validInput)).toBe(true);
  });
  test('로또 번호가 6개가 아닌 경우', () => {
    const invalidInput = [
      [1, 2, 46, 100, 0, 12, 1],
      [1, 2, 3],
      [1, 2, 3, 4],
      [3],
    ];
    try {
      invalidInput.forEach((lotto) => {
        expect(validateLength(lotto)).toBe(true);
      });
    } catch (error) {
      expect(error).toEqual(ERROR_MESSAGE.INVALID_LOTTO_LENGTH);
    }
  });

  test('로또의 각 번호들이 1~45 사이인 경우', () => {
    const validInput = [1, 2, 45, 18, 32, 12];
    validInput.forEach((lottoNum) => {
      expect(validateRange(lottoNum)).toBe(true);
    });
  });
  test('로또의 각 번호들이 1~45 사이가 아닌 경우', () => {
    const invalidInput = [1, 2, 46, 100, 0, 12];
    try {
      invalidInput.forEach((lottoNum) => {
        expect(validateRange(lottoNum)).toBe(true);
      });
    } catch (error) {
      expect(error).toEqual(ERROR_MESSAGE.INVALID_LOTTO_RANGE);
    }
  });

  test('로또 번호가 중복되지 않는 경우', () => {
    const validInput = [1, 2, 24, 33, 12, 38];
    expect(validateUnique(validInput)).toBe(true);
  });
  test('로또 번호가 중복되는 경우', () => {
    const invalidInput = [
      [1, 1, 2, 3, 4, 5],
      [41, 2, 22, 22, 41, 5],
      [1, 2, 34, 34, 34, 4],
    ];
    try {
      invalidInput.forEach((lottoNum) => {
        expect(validateUnique(lottoNum)).toBe(true);
      });
    } catch (error) {
      expect(error).toEqual(ERROR_MESSAGE.INVALID_LOTTO_UNIQUE);
    }
  });
});
