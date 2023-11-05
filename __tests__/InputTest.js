import UserInput from '../src/UserInput.js';

describe('유저 입력 테스트', () => {
  describe('로또 구입 금액 입력 테스트', () => {
    test('빈 값을 입력할 경우 예외를 발생시킨다.', () => {
      expect(() => UserInput.checkPurchaseAmountValidation('')).toThrow(
        '[ERROR]',
      );
    });

    test.each(['abc', 'ㄱㄴㄷ'])(
      '숫자가 아닌 값을 입력할 경우 예외를 발생시킨다.',
      (input) => {
        expect(() => UserInput.checkPurchaseAmountValidation(input)).toThrow(
          '[ERROR]',
        );
      },
    );

    test.each(['-1000', '0'])(
      '0 이하의 숫자를 입력할 경우 예외를 발생시킨다.',
      (input) => {
        expect(() => UserInput.checkPurchaseAmountValidation(input)).toThrow(
          '[ERROR]',
        );
      },
    );

    test.each(['1', '100', '1234'])(
      '1000으로 나누어떨어지지 않는 숫자를 입력할 경우 예외를 발생시킨다.',
      (input) => {
        expect(() => UserInput.checkPurchaseAmountValidation(input)).toThrow(
          '[ERROR]',
        );
      },
    );
  });
});
