import { GAME_RULE } from '../src/constants/gameRule';
import { ERROR_MESSAGE } from '../src/constants/messages';
import InputValidator from '../src/validator/InputValidator';

describe('💙 InputValidator 클래스를 테스트합니다. ฅ^._.^ฅ', () => {
  test('[validateMoney] 인자로 받은 money가 숫자가 아닌 경우 에러가 발생해요.', () => {
    expect(() => InputValidator.validateMoney('reason')).toThrow(
      ERROR_MESSAGE.NOT_A_NUMBER,
    );
  });

  test('[validateMoney] 인자로 받은 money가 0 또는 음수일 경우 에러가 발생해요.', () => {
    const invalidMoneyList = [0, -100, -5];

    invalidMoneyList.forEach((invalidMoney) => {
      expect(() => InputValidator.validateMoney(invalidMoney)).toThrow(
        ERROR_MESSAGE.NEGATIVE_VALUE,
      );
    });
  });

  test(`[validateMoney] 인자로 받은 money가 ${GAME_RULE.MIN_AMOUNT_UNIT}으로 나누어 떨어지지 않으면 에러가 발생해요.`, () => {
    const invalidMoneyList = [1_001, 5_500, 4, 4.4, 99_999];

    invalidMoneyList.forEach((invalidMoney) => {
      expect(() => InputValidator.validateMoney(invalidMoney)).toThrow(
        ERROR_MESSAGE.NOT_BEING_DIVIDED,
      );
    });
  });
});
