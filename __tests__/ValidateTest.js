import Validator from "../src/Validate.js";
import ERROR_MESSAGE from "../src/Errors.js";

describe("ValidateTest", () => {
  test("입력금액은 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => Validator.validateMoneyUnit(1500)).toThrow(
      ERROR_MESSAGE.moneyUnit
    );
  });
});
