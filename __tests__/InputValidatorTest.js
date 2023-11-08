import PurchaseAmountInputValidator from '../src/Service/PurchaseAmountInputValidator.js';
import { PURCHASE_AMOUNT_ERROR_MESSAGES } from '../src/Constant/Constants.js';

describe('구입 금액 유효성 검사(PurchaseAmountInputValidator) 클래스 테스트', () => {
  test.each(['', '1,2,3,4,5,6', '1a', '12342%', null, undefined, {}])(
    '구입 금액 입력값이 숫자가 아닌 다른 값을 포함하고 있는 경우 예외가 발생한다.',
    (invalidPurchaseAmountInput) => {
      const purchaseAmountInputValidator = new PurchaseAmountInputValidator();
      expect(() => {
        purchaseAmountInputValidator.validateNumber(invalidPurchaseAmountInput);
      }).toThrow(PURCHASE_AMOUNT_ERROR_MESSAGES.NOT_NUMBER);
    }
  );
  test.each(['012', '0'])(
    '구입 금액 입력값이 0으로 시작하는 경우 예외가 발생한다.',
    (invalidPurchaseAmountInput) => {
      const purchaseAmountInputValidator = new PurchaseAmountInputValidator();
      expect(() => {
        purchaseAmountInputValidator.validateStartWithZero(
          invalidPurchaseAmountInput
        );
      }).toThrow(PURCHASE_AMOUNT_ERROR_MESSAGES.START_WITH_ZERO);
    }
  );
  test.each(['999', '10', '1'])(
    '구입 금액 입력값이 로또 하나의 가격(1000원)보다 더 적은 경우 예외가 발생한다.',
    (invalidPurchaseAmountInput) => {
      const purchaseAmountInputValidator = new PurchaseAmountInputValidator();
      expect(() => {
        purchaseAmountInputValidator.validateSmallerThanLottoPrice(
          invalidPurchaseAmountInput
        );
      }).toThrow(PURCHASE_AMOUNT_ERROR_MESSAGES.LESS_THAN_LOTTO_PRICE);
    }
  );
  test.each(['9999', '1012'])(
    '구입 금액 입력값이 1000으로 나누어 떨어지지 않는 경우 예외가 발생한다.',
    (invalidPurchaseAmountInput) => {
      const purchaseAmountInputValidator = new PurchaseAmountInputValidator();
      expect(() => {
        purchaseAmountInputValidator.validateDivisibleByThousand(
          invalidPurchaseAmountInput
        );
      }).toThrow(PURCHASE_AMOUNT_ERROR_MESSAGES.NOT_DIVISIBLE_BY_THOUSAND);
    }
  );
});
