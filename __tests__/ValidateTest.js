import ERROR_MESSAGE from '../src/constant/ErrorMessage';
import Validate from '../src/Validate';

describe('Validate 클래스 테스트', () => {
  test.each(['abc', '!@#'])(
    'Payment: Number로 변환할 수 없는 값을 입력하면 예외가 발생한다.',
    (input) => {
      expect(() => {
        Validate.payment(input);
      }).toThrow(ERROR_MESSAGE.nonNumeric);
    },
  );

  test.each(['-1', '0', '1.234'])(
    'Payment: 1,000원으로 나눠떨어지는 양수가 아니면 예외가 발생한다.',
    (input) => {
      expect(() => {
        Validate.payment(input);
      }).toThrow(ERROR_MESSAGE.invalidAmount);
    },
  );

  test.each(['abc', '!@#'])(
    'Bonus number: Number로 변환할 수 없는 값을 입력하면 예외가 발생한다.',
    (input) => {
      const winning = [1, 2, 3, 4, 5, 6];

      expect(() => {
        Validate.bonusNumber(input, winning);
      }).toThrow(ERROR_MESSAGE.nonNumeric);
    },
  );

  test.each(['0', '46', '1.234'])(
    'Bonus number: 1~45 사이 숫자가 아닌 값을 입력하면 예외가 발생한다.',
    (input) => {
      const winning = [1, 2, 3, 4, 5, 6];

      expect(() => {
        Validate.bonusNumber(input, winning);
      }).toThrow(ERROR_MESSAGE.outOfRange);
    },
  );

  test('Bonus number: 당첨 번호와 중복되는 숫자를 넣으면 예외가 발생한다.', () => {
    const input = 1;
    const winning = [1, 2, 3, 4, 5, 6];

    expect(() => {
      Validate.bonusNumber(input, winning);
    }).toThrow(ERROR_MESSAGE.duplicateWinningNumber);
  });
});
