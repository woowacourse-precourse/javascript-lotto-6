import UserInput from '../src/UserInput.js';
import { ERROR } from '../src/constants.js';

describe('유저 입력 테스트', () => {
  describe('로또 구입 금액 입력 테스트', () => {
    test('빈 값을 입력할 경우 에러를 반환한다.', () => {
      expect(UserInput.getPurchaseAmountValidation('')).toBe(ERROR.BLANK_INPUT);
    });

    test.each(['abc', 'ㄱㄴㄷ'])(
      '숫자가 아닌 값을 입력할 경우 에러를 반환한다.',
      (input) => {
        expect(UserInput.getPurchaseAmountValidation(input)).toBe(
          ERROR.NOT_A_NUMBER,
        );
      },
    );

    test.each(['-1000', '0'])(
      '0 이하의 숫자를 입력할 경우 에러를 반환한다.',
      (input) => {
        expect(UserInput.getPurchaseAmountValidation(input)).toBe(
          ERROR.NOT_A_NATURAL_NUMBER,
        );
      },
    );

    test.each(['1', '100', '1234'])(
      '1000으로 나누어떨어지지 않는 숫자를 입력할 경우 에러를 반환한다.',
      (input) => {
        expect(UserInput.getPurchaseAmountValidation(input)).toBe(
          ERROR.NOT_DIVIDED_BY_THOUSAND,
        );
      },
    );

    test.each(['1000', '10000'])(
      '올바른 값을 입력할 경우 VALID를 반환한다.',
      (input) => {
        expect(UserInput.getPurchaseAmountValidation(input)).toBe(
          UserInput.VALID,
        );
      },
    );
  });
});
