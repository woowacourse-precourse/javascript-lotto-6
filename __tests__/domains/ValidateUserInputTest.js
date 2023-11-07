import {
  LOTTO,
  LIMIT_PER_DAY_PURCHASABLE_TOTAL_PRICE,
} from '../../src/constants/lotto';
import { ERROR_MESSAGE } from '../../src/constants/message';
import {
  ValidateWinningNumbersUserInput,
  ValidatePurchasePriceUserInput,
} from '../../src/utils/ValidateUserInput';

describe('ValidatePurchasePriceUserInput test', () => {
  test.each(['"1000a"', '사딸라'])(
    '숫자가 아닌 값이 들어왔을때 숫자가 아니라는 메세지와 함께 예외가 발생해야 한다.',
    (purchasePrice) => {
      // given
      // when
      // then
      expect(() => {
        new ValidatePurchasePriceUserInput(purchasePrice);
      }).toThrow(ERROR_MESSAGE.USER_INPUT.IS_NOT_ONLY_NUMBER_TYPE);
      expect(ERROR_MESSAGE.USER_INPUT.IS_NOT_ONLY_NUMBER_TYPE).toBeDefined();
    },
  );

  test('로또 1장 가격보다 적게 입력했을때 최소 구매 금액 부족 메세지와 함께 예외가 발생해야 한다.', () => {
    // given
    const purchasePrice = '900';

    // when
    // then
    expect(() => {
      new ValidatePurchasePriceUserInput(purchasePrice);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.LOWER_THAN_MINIMUM_PURCHASE_PRICE);
    expect(
      ERROR_MESSAGE.USER_INPUT.LOWER_THAN_MINIMUM_PURCHASE_PRICE,
    ).toBeDefined();
  });

  test('음수의 금액을 입력했을때 양수만 입력해달라는 메세지와 함께 예외가 발생해야 한다.', () => {
    // given
    const purchasePrice = '-15000';

    // when
    // then
    expect(() => {
      new ValidatePurchasePriceUserInput(purchasePrice);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.HAVE_MINUS_SIGN);
    expect(ERROR_MESSAGE.USER_INPUT.HAVE_MINUS_SIGN).toBeDefined();
  });

  test(`${LOTTO.SELLING_PRICE}의 배수가 아닌 값을 입력했을때 ${LOTTO.SELLING_PRICE}단위로 입력해달라는 메세지와 함께 예외가 발생해야 한다.`, () => {
    // given
    const purchasePrice = '4980';

    // when
    // then
    expect(() => {
      new ValidatePurchasePriceUserInput(purchasePrice);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.IS_NOT_MULTIPLE_SELLING_PRICE);
    expect(
      ERROR_MESSAGE.USER_INPUT.IS_NOT_MULTIPLE_SELLING_PRICE,
    ).toBeDefined();
  });

  test('구매 금액에 공백이 들어있을때 공백을 입력하지 말아 달라는 메세지와 함께 예외가 발생해야 한다.', () => {
    // given
    const purchasePrice = '10 000';

    // when
    // then
    expect(() => {
      new ValidatePurchasePriceUserInput(purchasePrice);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.HAVE_SPACING);
    expect(ERROR_MESSAGE.USER_INPUT.HAVE_SPACING).toBeDefined();
  });

  test('구매가능 금액을 초과했을때 1일구매 가능 금액 알림 메세지와 함께 예외가 발생해야 한다.', () => {
    // given
    const purchasePrice = String(
      LIMIT_PER_DAY_PURCHASABLE_TOTAL_PRICE + LOTTO.SELLING_PRICE,
    );

    // when
    // then
    expect(() => {
      new ValidatePurchasePriceUserInput(purchasePrice);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.IS_OVER_PURCHASABLE_PRICE_OF_PER_DAY);
    expect(
      ERROR_MESSAGE.USER_INPUT.IS_OVER_PURCHASABLE_PRICE_OF_PER_DAY,
    ).toBeDefined();
  });
});

describe('ValidateWinningNumbersUserInput test', () => {
  test(`당첨숫자가 (,)로 구분했을때 ${LOTTO.NUMBER_COUNT}자리가 아니면 메세지와 함께 예외가 발생한다.`, () => {
    // given
    const winningNumbers = '1,2,3,4,5';

    // when
    // then
    expect(() => {
      new ValidateWinningNumbersUserInput(winningNumbers);
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
      new ValidateWinningNumbersUserInput(winningNumbers);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.HAVE_DUPLICATED_NUMBER);
    expect(ERROR_MESSAGE.USER_INPUT.HAVE_DUPLICATED_NUMBER).toBeDefined();
  });

  test('당첨 숫자에 (,)로 구분했을때 (,)사이에 아무것도 없으면 메세지와 함께 예외가 발생해야 한다.', () => {
    // given
    const winningNumbers = '1,2,3,,4,5';

    // when
    // then
    expect(() => {
      new ValidateWinningNumbersUserInput(winningNumbers);
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
      new ValidateWinningNumbersUserInput(winningNumbers);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.HAVE_NOT_NUMBER_TYPE);
    expect(ERROR_MESSAGE.USER_INPUT.HAVE_NOT_NUMBER_TYPE).toBeDefined();
  });

  test('당첨숫자에 (-) 부호를 가진 음수가 있을때 메세지와 함께 예외가 발생한다', () => {
    // given
    const winningNumbers = '1,2,3,4,5,-6';

    // when
    // then
    expect(() => {
      new ValidateWinningNumbersUserInput(winningNumbers);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.EXIST_NEGATIVE_SIGN);
    expect(ERROR_MESSAGE.USER_INPUT.EXIST_NEGATIVE_SIGN).toBeDefined();
  });

  test('당첨 숫자에 소수점을 가진 숫자가 있을때 메세지와 함께 예외가 발생한다.', () => {
    // given
    const winningNumbers = '1,2,3,4,5,6.5';

    // when
    // then
    expect(() => {
      new ValidateWinningNumbersUserInput(winningNumbers);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.HAVE_NOT_INTEGER_NUMBER);
    expect(ERROR_MESSAGE.USER_INPUT.HAVE_NOT_INTEGER_NUMBER).toBeDefined();
  });

  test('당첨 숫자에 1e3와 같은 과학적 기수법이 있을때 메세지와 함께 예외가 발생해야 한다', () => {
    // given
    const winningNumbers = '1,2,3,4,1e3,5';

    // when
    // then
    expect(() => {
      new ValidateWinningNumbersUserInput(winningNumbers);
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
      new ValidateWinningNumbersUserInput(winningNumbers);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.EXIST_OVER_RANGE_NUMBER);
    expect(ERROR_MESSAGE.USER_INPUT.EXIST_OVER_RANGE_NUMBER).toBeDefined();
  });
});

console.log(Number(''));
