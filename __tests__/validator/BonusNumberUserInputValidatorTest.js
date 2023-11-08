import { LOTTO } from '../../src/constants/lotto';
import { ERROR_MESSAGE } from '../../src/constants/message';
import BonusNumberUserInputValidator from '../../src/validator/BonusNumberUserInputValidator';

describe('class BonusNumberUserInputValidator test', () => {
  const winngingNumbers = '1,2,3,4,5,6';

  test.each([`${LOTTO.NUMBER_RANGE.MAX + 1}`, `${LOTTO.NUMBER_RANGE.MIN - 1}`])(
    `보너스 숫자가 ${LOTTO.NUMBER_RANGE.MIN}~${LOTTO.NUMBER_RANGE.MAX}범위 밖의 숫자일때 메세지와 함께 예외가 발생해야 한다.`,
    (overRangeBonusNumber) => {
      // given
      const bonusNumber = overRangeBonusNumber;

      // when
      // then
      expect(() => {
        new BonusNumberUserInputValidator(bonusNumber, winngingNumbers);
      }).toThrow(ERROR_MESSAGE.USER_INPUT.BONUS_NUMBER.EXIST_OVER_RANGE);
      expect(
        ERROR_MESSAGE.USER_INPUT.BONUS_NUMBER.EXIST_OVER_RANGE,
      ).toBeDefined();
    },
  );

  test.each(['1', '3', '5'])(
    '보너스 숫자가 당첨숫자와 중복됐을때 메세지와 함께 예외가 발생해야 한다.',
    (duplicateBonusNumber) => {
      // given
      const bonusNumber = duplicateBonusNumber;
      // when
      // then
      expect(() => {
        new BonusNumberUserInputValidator(bonusNumber, winngingNumbers);
      }).toThrow(
        ERROR_MESSAGE.USER_INPUT.BONUS_NUMBER.DUPLICATED_WINNING_NUMBERS,
      );
      expect(
        ERROR_MESSAGE.USER_INPUT.BONUS_NUMBER.DUPLICATED_WINNING_NUMBERS,
      ).toBeDefined();
    },
  );

  test('보너스 숫자 사이에 공백이 들어있을때 메세지와 함께 예외가 발생해야 한다.', () => {
    // given
    const bonusNumber = '1 0';

    // when
    // then
    expect(() => {
      new BonusNumberUserInputValidator(bonusNumber, winngingNumbers);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.BONUS_NUMBER.HAVE_SPACING);
    expect(ERROR_MESSAGE.USER_INPUT.BONUS_NUMBER.HAVE_SPACING).toBeDefined();
  });

  test('보너스 숫자가 음수인 경우 메세지와 함께 예외가 발생해야 한다.', () => {
    // given
    const bonusNumber = '-1';

    // when
    // then
    expect(() => {
      new BonusNumberUserInputValidator(bonusNumber, winngingNumbers);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.BONUS_NUMBER.EXIST_NEGATIVE_SIGN);
    expect(
      ERROR_MESSAGE.USER_INPUT.BONUS_NUMBER.EXIST_NEGATIVE_SIGN,
    ).toBeDefined();
  });

  test('보너스 숫자의 시작이 0으로 시작될때 메세지와 함께 예외가 발생해야 한다.', () => {
    // given
    const bonusNumber = '01';

    // when
    // then
    expect(() => {
      new BonusNumberUserInputValidator(bonusNumber, winngingNumbers);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.BONUS_NUMBER.HAVE_START_NUMBER_ZERO);
    expect(
      ERROR_MESSAGE.USER_INPUT.BONUS_NUMBER.HAVE_START_NUMBER_ZERO,
    ).toBeDefined();
  });

  test('보너스 숫자가 소수점을 가진 숫자일때 메세지와 함께 예외가 발생해야 한다.', () => {
    // given
    const bonusNumber = '1.5';

    // when
    // then
    expect(() => {
      new BonusNumberUserInputValidator(bonusNumber, winngingNumbers);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.BONUS_NUMBER.HAVE_DECIMAL_NUMBER);
    expect(
      ERROR_MESSAGE.USER_INPUT.BONUS_NUMBER.HAVE_DECIMAL_NUMBER,
    ).toBeDefined();
  });

  test('보너스 숫자에 number 이외의 문자가 포함됐을때 메세지와 함께 예외가 발생해야 한다.', () => {
    // given
    const bonusNumber = `+${LOTTO.NUMBER_RANGE.MIN}`;

    // when
    // then
    expect(() => {
      new BonusNumberUserInputValidator(bonusNumber, winngingNumbers);
    }).toThrow(
      ERROR_MESSAGE.USER_INPUT.BONUS_NUMBER
        .HAVE_INVALID_INPUT_WITHOUT_NUMBER_TYPE,
    );
    expect(
      ERROR_MESSAGE.USER_INPUT.BONUS_NUMBER
        .HAVE_INVALID_INPUT_WITHOUT_NUMBER_TYPE,
    ).toBeDefined();
  });
});
