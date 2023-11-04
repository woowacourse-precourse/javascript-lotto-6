import { ERROR_MESSAGE } from '../src/constants/messages';
import InputValidator from '../src/validator/InputValidator';

describe('💙 InputValidator 클래스를 테스트합니다. ฅ^._.^ฅ', () => {
  test('[validateMoney] 인자로 받은 money가 숫자가 아닌 경우 에러가 발생해요.', () => {
    expect(() => InputValidator.validateMoney('reason')).toThrow(
      ERROR_MESSAGE.NOT_A_NUMBER,
    );
  });
});
