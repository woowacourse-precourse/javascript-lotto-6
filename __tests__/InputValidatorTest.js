import { GAME_RULE } from '../src/constants/gameRule.js';
import { ERROR_MESSAGE } from '../src/constants/messages.js';
import InputValidator from '../src/validator/InputValidator.js';

describe('💙 InputValidator 클래스를 테스트합니다. ฅ^._.^ฅ', () => {
  test('[validateMoney] 인자로 받은 money가 숫자가 아닌 경우 에러가 발생한다.', () => {
    expect(() => InputValidator.validateMoney('reason')).toThrow(
      ERROR_MESSAGE.NOT_A_NUMBER,
    );
  });

  test('[validateMoney] 인자로 받은 money가 0 또는 음수일 경우 에러가 발생한다.', () => {
    const invalidMoneyList = [0, -100, -5];

    invalidMoneyList.forEach((invalidMoney) => {
      expect(() => InputValidator.validateMoney(invalidMoney)).toThrow(
        ERROR_MESSAGE.NEGATIVE_VALUE,
      );
    });
  });

  test(`[validateMoney] 인자로 받은 money가 ${GAME_RULE.MIN_AMOUNT_UNIT}으로 나누어 떨어지지 않으면 에러가 발생한다.`, () => {
    const invalidMoneyList = [1_001, 5_500, 4, 4.4, 99_999];

    invalidMoneyList.forEach((invalidMoney) => {
      expect(() => InputValidator.validateMoney(invalidMoney)).toThrow(
        ERROR_MESSAGE.NOT_BEING_DIVIDED,
      );
    });
  });

  test(`[validateMoney] 인자로 받은 money가 ${GAME_RULE.MAX_AMOUNT_UNIT}을 초과하면 에러가 발생한다.`, () => {
    const invalidMoneyList = [200_000, 5_000_000, 900_000_000];

    invalidMoneyList.forEach((invalidMoney) => {
      expect(() => InputValidator.validateMoney(invalidMoney)).toThrow(
        ERROR_MESSAGE.OVER_THE_LIMIT,
      );
    });
  });

  test('[validateWinningNumbers] 인자로 받은 배열에 숫자가 아닌 값이 있으면 에러가 발생한다.', () => {
    const invalidNumberList = ['reason', 1, 2, 3, 4, 5];

    expect(() =>
      InputValidator.validateWinningNumbers(invalidNumberList),
    ).toThrow(ERROR_MESSAGE.NOT_A_NUMBER);
  });

  test('[validateWinningNumbers] 인자로 받은 배열 요소에 0이 있으면 에러가 발생한다.', () => {
    const invalidNumberList = [0, 1, 2, 3, 4, 5];

    expect(() =>
      InputValidator.validateWinningNumbers(invalidNumberList),
    ).toThrow(ERROR_MESSAGE.OUT_OF_RANGE);
  });

  test('[validateWinningNumbers] 인자로 받은 배열 요소에 음수가 있으면 에러가 발생한다.', () => {
    const invalidNumberList = [1, 2, 3, 4, 5, -6];

    expect(() =>
      InputValidator.validateWinningNumbers(invalidNumberList),
    ).toThrow(ERROR_MESSAGE.OUT_OF_RANGE);
  });

  test('[validateWinningNumbers] 인자로 받은 배열 요소에 45를 초과하는 수가 있으면 에러가 발생한다.', () => {
    const invalidNumberList = [1, 2, 3, 4, 5, 100];

    expect(() =>
      InputValidator.validateWinningNumbers(invalidNumberList),
    ).toThrow(ERROR_MESSAGE.OUT_OF_RANGE);
  });

  test('[validateWinningNumbers] 6개의 요소로 이루어져 있지 않으면 에러가 발생한다.', () => {
    const invalidNumberList = [1, 2, 3, 4, 5, 6, 7, 8];

    expect(() =>
      InputValidator.validateWinningNumbers(invalidNumberList),
    ).toThrow(ERROR_MESSAGE.INVALID_COUNT);
  });

  test('[validateWinningNumbers] 중복된 값이 있으면 에러가 발생한다.', () => {
    const invalidNumberList = [1, 2, 3, 4, 4, 4];

    expect(() =>
      InputValidator.validateWinningNumbers(invalidNumberList),
    ).toThrow(ERROR_MESSAGE.NOT_A_UNIQUE);
  });

  test('[validateBonusNumber] 숫자가 아닌 값이면 에러가 발생한다.', () => {
    const invalidBonusNumber = 'REASON';

    expect(() =>
      InputValidator.validateBonusNumber(invalidBonusNumber),
    ).toThrow(ERROR_MESSAGE.NOT_A_NUMBER);
  });

  test('[validateBonusNumber] 1 ~ 45 사이의 숫자가 아니면 에러가 발생한다.', () => {
    const invalidBonusNumber = [0, 46, 10000];

    invalidBonusNumber.forEach((bonusNumber) => {
      expect(() => InputValidator.validateBonusNumber(bonusNumber)).toThrow(
        ERROR_MESSAGE.OUT_OF_RANGE,
      );
    });
  });
});
