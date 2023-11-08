import { ERROR_MESSAGE } from '../src/constant/message.js';
import { validateDivisible } from '../src/utils/validateFn.js';

describe('입력 금액 유효성 검사', () => {
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
