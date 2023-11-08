import {
  LOTTO,
  LIMIT_PER_DAY_PURCHASABLE_TOTAL_PRICE,
} from '../../src/constants/lotto';
import { ERROR_MESSAGE } from '../../src/constants/message';
import {
  ValidatePurchasePriceUserInput,
  ValidateBonusNumberUserInput,
} from '../../src/validator/ValidateUserInput';

describe('class ValidatePurchasePriceUserInput test', () => {
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

  test('구매 금액입력의 시작이 0으로 시작했을때 메세지와 함께 예외가 발생해야 한다.', () => {
    // given
    const purchasePrice = '01000';

    // when
    // then
    expect(() => {
      new ValidatePurchasePriceUserInput(purchasePrice);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.PURCHASE_PRICE.HAVE_START_NUMBER_ZERO);
    expect(
      ERROR_MESSAGE.USER_INPUT.PURCHASE_PRICE.HAVE_START_NUMBER_ZERO,
    ).toBeDefined();
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

describe('class ValidateBonusNumberUserInput test', () => {
  const winngingNumbers = '1,2,3,4,5,6';

  test.each([`${LOTTO.NUMBER_RANGE.MAX + 1}`, `${LOTTO.NUMBER_RANGE.MIN - 1}`])(
    `보너스 숫자가 ${LOTTO.NUMBER_RANGE.MIN}~${LOTTO.NUMBER_RANGE.MAX}범위 밖의 숫자일때 메세지와 함께 예외가 발생해야 한다.`,
    (overRangeBonusNumber) => {
      // given
      const bonusNumber = overRangeBonusNumber;

      // when
      // then
      expect(() => {
        new ValidateBonusNumberUserInput(bonusNumber, winngingNumbers);
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
        new ValidateBonusNumberUserInput(bonusNumber, winngingNumbers);
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
      new ValidateBonusNumberUserInput(bonusNumber, winngingNumbers);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.BONUS_NUMBER.HAVE_SPACING);
    expect(ERROR_MESSAGE.USER_INPUT.BONUS_NUMBER.HAVE_SPACING).toBeDefined();
  });

  test('보너스 숫자가 음수인 경우 메세지와 함께 예외가 발생해야 한다.', () => {
    // given
    const bonusNumber = '-1';

    // when
    // then
    expect(() => {
      new ValidateBonusNumberUserInput(bonusNumber, winngingNumbers);
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
      new ValidateBonusNumberUserInput(bonusNumber, winngingNumbers);
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
      new ValidateBonusNumberUserInput(bonusNumber, winngingNumbers);
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
      new ValidateBonusNumberUserInput(bonusNumber, winngingNumbers);
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
