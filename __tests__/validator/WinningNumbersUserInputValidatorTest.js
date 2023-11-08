import { LOTTO } from '../../src/constants/lotto';
import { ERROR_MESSAGE } from '../../src/constants/message';
import WinningNumbersUserInputValidator from '../../src/validator/WinningNumbersUserInputValidator';

describe('class WinningNumbersUserInputValidator test', () => {
  test(`당첨숫자가 (,)로 구분했을때 ${LOTTO.NUMBER_COUNT}자리가 아니면 메세지와 함께 예외가 발생한다.`, () => {
    // given
    const winningNumbers = '1,2,3,4,5';

    // when
    // then
    expect(() => {
      new WinningNumbersUserInputValidator(winningNumbers);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.INVALID_WINNING_NUMBERS_COUNT);
    expect(
      ERROR_MESSAGE.USER_INPUT.INVALID_WINNING_NUMBERS_COUNT,
    ).toBeDefined();
  });

  test('당첨 숫자중에 중복이 있을때 메세지와 함께 예외가 발생해야 한다', () => {
    // given
    const winningNumbers = '1,2,3,4,5,5';

    // when
    // then
    expect(() => {
      new WinningNumbersUserInputValidator(winningNumbers);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.HAVE_DUPLICATED_NUMBER);
    expect(ERROR_MESSAGE.USER_INPUT.HAVE_DUPLICATED_NUMBER).toBeDefined();
  });

  test('당첨 숫자에 (,)로 구분했을때 (,)사이에 아무것도 없으면 메세지와 함께 예외가 발생해야 한다.', () => {
    // given
    const winningNumbers = '1,2,3,,4,5';

    // when
    // then
    expect(() => {
      new WinningNumbersUserInputValidator(winningNumbers);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.EXIST_BETWEEN_COMMA_EMPTY_STRING);
    expect(
      ERROR_MESSAGE.USER_INPUT.EXIST_BETWEEN_COMMA_EMPTY_STRING,
    ).toBeDefined();
  });

  test('당첨 숫자중에 숫자타입이 아닌게 있을때 메세지와 함께 예외가 발생해야한다.', () => {
    // given
    const winningNumbers = '1,2,3,4,5,a';

    // when
    // then
    expect(() => {
      new WinningNumbersUserInputValidator(winningNumbers);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.HAVE_NOT_NUMBER_TYPE);
    expect(ERROR_MESSAGE.USER_INPUT.HAVE_NOT_NUMBER_TYPE).toBeDefined();
  });

  test('당첨숫자에 (-) 부호를 가진 음수가 있을때 메세지와 함께 예외가 발생한다', () => {
    // given
    const winningNumbers = '1,2,3,4,5,-6';

    // when
    // then
    expect(() => {
      new WinningNumbersUserInputValidator(winningNumbers);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.EXIST_NEGATIVE_SIGN);
    expect(ERROR_MESSAGE.USER_INPUT.EXIST_NEGATIVE_SIGN).toBeDefined();
  });

  test('당첨 숫자에 0으로 시작하는 숫자가 있을때 메세지와 함께 예외가 발생한다.', () => {
    // given
    const winningNumbers = '1,2,3,4,5,06';

    // when
    // then
    expect(() => {
      new WinningNumbersUserInputValidator(winningNumbers);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.HAVE_START_NUMBER_ZERO);
    expect(ERROR_MESSAGE.USER_INPUT.HAVE_START_NUMBER_ZERO).toBeDefined();
  });

  test('당첨 숫자에 소수점을 가진 숫자가 있을때 메세지와 함께 예외가 발생한다.', () => {
    // given
    const winningNumbers = '1,2,3,4,5,6.5';

    // when
    // then
    expect(() => {
      new WinningNumbersUserInputValidator(winningNumbers);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.HAVE_NOT_INTEGER_NUMBER);
    expect(ERROR_MESSAGE.USER_INPUT.HAVE_NOT_INTEGER_NUMBER).toBeDefined();
  });

  test('당첨 숫자에 1e3와 같은 과학적 기수법이 있을때 메세지와 함께 예외가 발생해야 한다', () => {
    // given
    const winningNumbers = '1,2,3,4,1e3,5';

    // when
    // then
    expect(() => {
      new WinningNumbersUserInputValidator(winningNumbers);
    }).toThrow(
      ERROR_MESSAGE.USER_INPUT.HAVE_INVALID_INPUT_WITHOUT_NUMBER_AND_COMMA,
    );
    expect(
      ERROR_MESSAGE.USER_INPUT.HAVE_INVALID_INPUT_WITHOUT_NUMBER_AND_COMMA,
    ).toBeDefined();
  });

  test(`당첨 숫자중에 ${LOTTO.NUMBER_RANGE.MIN}~${LOTTO.NUMBER_RANGE.MAX} 범위 외의 숫자가 있을때 메세지와 함께 예외가 발생해야 한다.`, () => {
    // given
    const winningNumbers = `1,2,3,4,5,${LOTTO.NUMBER_RANGE.MAX + 1}`;

    // when
    // then
    expect(() => {
      new WinningNumbersUserInputValidator(winningNumbers);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.EXIST_OVER_RANGE_NUMBER);
    expect(ERROR_MESSAGE.USER_INPUT.EXIST_OVER_RANGE_NUMBER).toBeDefined();
  });
});
