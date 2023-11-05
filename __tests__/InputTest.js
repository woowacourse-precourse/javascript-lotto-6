import UserInput from '../src/UserInput.js';

describe('유저 입력 테스트', () => {
  describe('로또 구입 금액 입력 테스트', () => {
    test('빈 값을 입력할 경우 예외를 발생시킨다.', () => {
      expect(() => UserInput.checkPurchaseAmountValidation('')).toThrow('[ERROR]');
    });

    test.each(['abc', 'ㄱㄴㄷ'])('숫자가 아닌 값을 입력할 경우 예외를 발생시킨다.', (input) => {
      expect(() => UserInput.checkPurchaseAmountValidation(input)).toThrow('[ERROR]');
    });

    test.each(['-1000', '0'])('0 이하의 숫자를 입력할 경우 예외를 발생시킨다.', (input) => {
      expect(() => UserInput.checkPurchaseAmountValidation(input)).toThrow('[ERROR]');
    });

    test.each(['1', '100', '1234'])(
      '1000으로 나누어떨어지지 않는 숫자를 입력할 경우 예외를 발생시킨다.',
      (input) => {
        expect(() => UserInput.checkPurchaseAmountValidation(input)).toThrow('[ERROR]');
      },
    );

    test.each(['1000', '10000'])('값을 올바르게 입력할 경우 예외를 발생시키지 않는다.', (input) => {
      expect(() => UserInput.checkPurchaseAmountValidation(input)).not.toThrow('[ERROR]');
    });
  });

  describe('당첨 번호 입력 테스트', () => {
    test('빈 값을 입력할 경우 예외를 발생시킨다.', () => {
      expect(() => UserInput.checkWinningNumbersValidation('')).toThrow('[ERROR]');
    });

    test.each(['abc,1,2,3,4,5', '1,2,3,4,5,ㄱㄴㄷ'])(
      '숫자가 아닌 값을 입력할 경우 예외를 발생시킨다.',
      (input) => {
        expect(() => UserInput.checkWinningNumbersValidation(input)).toThrow('[ERROR]');
      },
    );

    test.each(['-1000,1,2,3,4,5', '1,2,3,4,5,0'])(
      '0 이하의 숫자를 입력할 경우 예외를 발생시킨다.',
      (input) => {
        expect(() => UserInput.checkWinningNumbersValidation(input)).toThrow('[ERROR]');
      },
    );

    test.each(['1,2,3,4', '1,2,3,4,5,6,7'])(
      '입력한 숫자가 6개가 아닐 경우 예외를 발생시킨다.',
      (input) => {
        expect(() => UserInput.checkWinningNumbersValidation(input)).toThrow('[ERROR]');
      },
    );

    test.each(['1,2,3,4,4,4', '1,1,1,1,1,1'])(
      '같은 숫자를 여러 번 입력할 경우 예외를 발생시킨다.',
      (input) => {
        expect(() => UserInput.checkWinningNumbersValidation(input)).toThrow('[ERROR]');
      },
    );

    test('값을 올바르게 입력할 경우 예외를 발생시키지 않는다.', () => {
      expect(() => UserInput.checkWinningNumbersValidation('1,2,3,4,5,6')).not.toThrow('[ERROR]');
    });
  });
});
