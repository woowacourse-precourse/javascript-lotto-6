import { priceValidation } from "../../src/utils/Validation";
import { ERROR_MESSAGE } from "../../src/constants/ErrorMessages.js";

describe("구매 가격 테스트", () => {
  test("구입가격이 1,000원 단위인지 확인하고 아니면 예외가 발생한다.", () => {
    const price = "100";
    expect(() => {
      priceValidation(price);
    }).toThrow(ERROR_MESSAGE.price);
  });

  test("구입가격이 0이면 예외를 발생시킨다.", () => {
    const price = "0";
    expect(() => {
      priceValidation(price);
    }).toThrow(ERROR_MESSAGE.zero);
  });
});
