import Assert from "../src/utils/Assert";
import { PurchaseValueError } from "../src/utils/Error";

describe("Assert 클래스 테스트", () => {
  /** @type {Assert} */
  let assert;

  beforeEach(() => {
    assert = new Assert();
  });

  test("로또 구입 금액이 올바른 금액인가?", () => {
    const inputs = [1000, 10000, 2000];
    const errorInputs = [-1, -100, 1, 10, 1010, NaN, Infinity, -Infinity];

    inputs.forEach((input) => {
      expect(() => assert.assertPurchaseValue(input)).not.toThrow(
        PurchaseValueError
      );
    });

    errorInputs.forEach((errorInput) => {
      expect(() => assert.assertPurchaseValue(errorInput)).toThrow(
        PurchaseValueError
      );
    });
  });
});
