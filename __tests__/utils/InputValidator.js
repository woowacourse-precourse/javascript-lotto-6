import ERROR_MESSAGE from '../../src/constants/error';
import InputValidator from '../../src/utils/InputValidator';

describe('로또 구입금액 유효성 검사 테스트', () => {
  test.each(['1000', '2000', '3000'])(
    '1000원으로 나누어 떨어지면 로또를 구입할 수 있습니다.',
    (input) => {
      expect(() => {
        InputValidator.validatePurchaseAmount(input);
      }).not.toThrow();
    },
  );

  test.each(['', ' ', 'a', '1000f'])(
    '숫자를 입력하지 않으면 예외처리',
    (input) => {
      expect(() => {
        InputValidator.validatePurchaseAmount(input);
      }).toThrow(ERROR_MESSAGE.notNumber);
    },
  );

  test.each(['0', '1001', '2500', '3500', '8900'])(
    '1000원으로 나누어 떨어지지 않으면 예외처리',
    (input) => {
      expect(() => {
        InputValidator.validatePurchaseAmount(input);
      }).toThrow(ERROR_MESSAGE.invalidInput);
    },
  );
});
