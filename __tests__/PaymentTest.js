import ERROR_MESSAGE from '../src/ErrorMessage';
import Validate from '../src/Validate';

describe('Validate 클래스 테스트', () => {
  test.each(['abc', '!@#'])(
    'Payment: Number로 변환할 수 없는 값을 입력하면 예외가 발생한다.',
    (input) => {
      expect(() => {
        Validate.validatePayment(input);
      }).toThrow(ERROR_MESSAGE.nonNumeric);
    },
  );

  test.each(['-1', '0', '1.234'])(
    'Payment: 1,000원으로 나눠떨어지는 양수가 아니면 예외가 발생한다.',
    (input) => {
      expect(() => {
        Validate.validatePayment(input);
      }).toThrow(ERROR_MESSAGE.invalidAmount);
    },
  );
});
