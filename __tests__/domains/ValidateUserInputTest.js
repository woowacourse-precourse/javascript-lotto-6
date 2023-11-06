import {
  LOTTO,
  LIMIT_PER_DAY_PURCHASABLE_TOTAL_PRICE,
} from '../../src/constants/lotto';
import { ERROR_MESSAGE } from '../../src/constants/message';
import { validateUserInput } from '../../src/utils/ValidateUserInput';

describe('method : purchasePrice  test', () => {
  test.each(['"1000a"', '사딸라'])(
    '숫자가 아닌 값이 들어왔을때 숫자가 아니라는 메세지와 함께 예외가 발생해야 한다.',
    (purchasePrice) => {
      // given
      // when
      // then
      expect(() => {
        validateUserInput.purchasePrice(purchasePrice);
      }).toThrow(ERROR_MESSAGE.USER_INPUT.IS_NOT_ONLY_NUMBER_TYPE);
    },
  );

  test('로또 1장 가격보다 적게 입력했을때 최소 구매 금액 부족 메세지와 함께 예외가 발생해야 한다.', () => {
    // given
    const purchasePrice = '900';

    // when
    // then
    expect(() => {
      validateUserInput.purchasePrice(purchasePrice);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.LOWER_THAN_MINIMUM_PURCHASE_PRICE);
  });

  test('음수의 금액을 입력했을때 양수만 입력해달라는 메세지와 함께 예외가 발생해야 한다.', () => {
    // given
    const purchasePrice = '-15000';

    // when
    // then
    expect(() => {
      validateUserInput.purchasePrice(purchasePrice);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.HAVE_MINUS_SIGN);
  });

  test(`${LOTTO.SELLING_PRICE}의 배수가 아닌 값을 입력했을때 ${LOTTO.SELLING_PRICE}단위로 입력해달라는 메세지와 함께 예외가 발생해야 한다.`, () => {
    // given
    const purchasePrice = '4980';

    // when
    // then
    expect(() => {
      validateUserInput.purchasePrice(purchasePrice);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.IS_NOT_MULTIPLE_SELLING_PRICE);
  });

  test('구매 금액에 공백이 들어있을때 공백을 입력하지 말아 달라는 메세지와 함께 예외가 발생해야 한다.', () => {
    // given
    const purchasePrice = '10 000';

    // when
    // then
    expect(() => {
      validateUserInput.purchasePrice(purchasePrice);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.HAVE_SPACING);
  });

  test('구매가능 금액을 초과했을때 1일구매 가능 금액 알림 메세지와 함께 예외가 발생해야 한다.', () => {
    // given
    const purchasePrice = String(
      LIMIT_PER_DAY_PURCHASABLE_TOTAL_PRICE + LOTTO.SELLING_PRICE,
    );

    // when
    // then
    expect(() => {
      validateUserInput.purchasePrice(purchasePrice);
    }).toThrow(ERROR_MESSAGE.USER_INPUT.IS_OVER_PURCHASABLE_PRICE_OF_PER_DAY);
  });
});
