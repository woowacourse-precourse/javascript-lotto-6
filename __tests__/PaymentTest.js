import App from '../src/App';
import ERROR_MESSAGE from '../src/ErrorMessage';

describe('App - validatePayment() 테스트', () => {
  test.each(['abc', '!@#'])(
    'Number로 변환할 수 없는 값을 입력하면 예외가 발생한다.',
    (input) => {
      expect(() => {
        App.validatePayment(input);
      }).toThrow(ERROR_MESSAGE.nonNumeric);
    },
  );

  test.each(['-1', '0', '1.234'])(
    '1,000원으로 나눠떨어지는 양수가 아니면 예외가 발생한다.',
    (input) => {
      expect(() => {
        App.validatePayment(input);
      }).toThrow(ERROR_MESSAGE.invalidAmount);
    },
  );
});
