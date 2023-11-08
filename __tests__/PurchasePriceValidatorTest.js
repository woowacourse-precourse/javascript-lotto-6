import PurchasePriceValidator from "../src/validate/PurchasePriceValidator.js";
import { PURCHASE_AMOUNT_ERROR_MESSAGE } from "../src/constants/Message.js";

describe("구매 금액 유효성 검사 테스트", () => {
  test("구매 금액이 1,000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      PurchasePriceValidator.validatePurchasePrice(1500);
    }).toThrow(PURCHASE_AMOUNT_ERROR_MESSAGE.wrongFormat);
  });

  test("구매 금액이 1,000원 미만이면 예외가 발생한다.", () => {
    expect(() => {
      PurchasePriceValidator.validatePurchasePrice(500);
    }).toThrow(PURCHASE_AMOUNT_ERROR_MESSAGE.underThousand);
  });

  test("구매 금액이 숫자 형태가 아니면 예외가 발생한다.", () => {
    expect(() => {
      PurchasePriceValidator.validatePurchasePrice("one thousand");
    }).toThrow(PURCHASE_AMOUNT_ERROR_MESSAGE.notNumber);
  });

  test("올바른 구매 금액이면 예외가 발생하지 않는다.", () => {
    expect(() => {
      PurchasePriceValidator.validatePurchasePrice(2000);
    }).not.toThrow();
  });
});