import {
  LOTTO,
  LIMIT_PER_DAY_PURCHASABLE_TOTAL_PRICE,
} from '../../src/constants/lotto';
import { ERROR_MESSAGE } from '../../src/constants/message';
import PurchasePriceUserInputValidator from '../../src/validator/PurchasePriceUserInputValidator';

describe('class PurchasePriceUserInputValidator test', () => {
  test.each(['"1000a"', '사딸라'])(
    '숫자가 아닌 값이 들어왔을때 숫자가 아니라는 메세지와 함께 예외가 발생해야 한다.',
    (purchasePrice) => {
      // given
      // when
      // then
      expect(() => {
        new PurchasePriceUserInputValidator(purchasePrice);
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
      new PurchasePriceUserInputValidator(purchasePrice);
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
      new PurchasePriceUserInputValidator(purchasePrice);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.HAVE_MINUS_SIGN);
    expect(ERROR_MESSAGE.USER_INPUT.HAVE_MINUS_SIGN).toBeDefined();
  });

  test(`${LOTTO.SELLING_PRICE}의 배수가 아닌 값을 입력했을때 ${LOTTO.SELLING_PRICE}단위로 입력해달라는 메세지와 함께 예외가 발생해야 한다.`, () => {
    // given
    const purchasePrice = '4980';

    // when
    // then
    expect(() => {
      new PurchasePriceUserInputValidator(purchasePrice);
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
      new PurchasePriceUserInputValidator(purchasePrice);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.HAVE_SPACING);
    expect(ERROR_MESSAGE.USER_INPUT.HAVE_SPACING).toBeDefined();
  });

  test('구매 금액입력의 시작이 0으로 시작했을때 메세지와 함께 예외가 발생해야 한다.', () => {
    // given
    const purchasePrice = '01000';

    // when
    // then
    expect(() => {
      new PurchasePriceUserInputValidator(purchasePrice);
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
      new PurchasePriceUserInputValidator(purchasePrice);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.IS_OVER_PURCHASABLE_PRICE_OF_PER_DAY);
    expect(
      ERROR_MESSAGE.USER_INPUT.IS_OVER_PURCHASABLE_PRICE_OF_PER_DAY,
    ).toBeDefined();
  });
});
