import InputValidator from '../src/InputValidator.js';

describe('입력 유효성 검증 테스트', () => {
  describe('로또 구입 금액 유효성 테스트', () => {
    test('빈 값일 경우 예외를 발생시킨다.', () => {
      expect(() => InputValidator.checkPurchaseAmount('')).toThrow('[ERROR]');
    });

    test.each(['abc', 'ㄱㄴㄷ'])('숫자가 아닐 경우 예외를 발생시킨다.', (input) => {
      expect(() => InputValidator.checkPurchaseAmount(input)).toThrow('[ERROR]');
    });

    test.each(['-1000', '0'])('0 이하의 숫자일 경우 예외를 발생시킨다.', (input) => {
      expect(() => InputValidator.checkPurchaseAmount(input)).toThrow('[ERROR]');
    });

    test.each(['1', '100', '1234'])(
      '1000으로 나누어떨어지지 않는 숫자일 경우 예외를 발생시킨다.',
      (input) => {
        expect(() => InputValidator.checkPurchaseAmount(input)).toThrow('[ERROR]');
      },
    );

    test.each(['1000', '10000'])('값이 올바를 경우 예외를 발생시키지 않는다.', (input) => {
      expect(() => InputValidator.checkPurchaseAmount(input)).not.toThrow('[ERROR]');
    });
  });

  describe('당첨 번호 유효성 테스트', () => {
    test('빈 값일 경우 예외를 발생시킨다.', () => {
      expect(() => InputValidator.checkWinningNumbers('')).toThrow('[ERROR]');
    });

    test.each(['abc,1,2,3,4,5', '1,2,3,4,5,ㄱㄴㄷ'])(
      '숫자가 아닐 경우 예외를 발생시킨다.',
      (input) => {
        expect(() => InputValidator.checkWinningNumbers(input)).toThrow('[ERROR]');
      },
    );

    test.each(['-1000,1,2,3,4,5', '1,2,3,4,5,0'])(
      '0 이하의 숫자일 경우 예외를 발생시킨다.',
      (input) => {
        expect(() => InputValidator.checkWinningNumbers(input)).toThrow('[ERROR]');
      },
    );

    test.each(['1,2,3,4', '1,2,3,4,5,6,7'])(
      '숫자가 6개가 아닐 경우 예외를 발생시킨다.',
      (input) => {
        expect(() => InputValidator.checkWinningNumbers(input)).toThrow('[ERROR]');
      },
    );

    test.each(['1,2,3,4,4,4', '1,1,1,1,1,1'])('숫자가 중복될 경우 예외를 발생시킨다.', (input) => {
      expect(() => InputValidator.checkWinningNumbers(input)).toThrow('[ERROR]');
    });

    test('값이 올바를 경우 예외를 발생시키지 않는다.', () => {
      expect(() => InputValidator.checkWinningNumbers('1,2,3,4,5,6')).not.toThrow('[ERROR]');
    });
  });

  describe('보너스 번호 유효성 테스트', () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    test('빈 값일 경우 예외를 발생시킨다.', () => {
      expect(() => InputValidator.checkBonusNumber(winningNumbers, '')).toThrow('[ERROR]');
    });

    test.each(['abc', 'ㄱㄴㄷ'])('숫자가 아닐 경우 예외를 발생시킨다.', (input) => {
      expect(() => InputValidator.checkBonusNumber(winningNumbers, input)).toThrow('[ERROR]');
    });

    test('당첨 번호에 존재하는 번호일 경우 예외를 발생시킨다.', () => {
      expect(() => InputValidator.checkBonusNumber(winningNumbers, '6')).toThrow('[ERROR]');
    });

    test('값이 올바를 경우 예외를 발생시키지 않는다.', () => {
      expect(() => InputValidator.checkBonusNumber(winningNumbers, '7')).not.toThrow('[ERROR]');
    });
  });
});
