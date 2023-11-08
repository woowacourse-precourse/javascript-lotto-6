import Consumer from "../src/Consumer.js";
import { commonValidation, purchaseAmountValidation } from "../src/validator";

describe("소비자 클래스 테스트", () => {
  test("구입금액이 숫자가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new Consumer('123qwerty');
    }).toThrow(`[ERROR]: ${commonValidation.isNumber.errorMessage}`);
  });

  test("구입금액이 1000원으로 나누어 떨어지지 않는 경우 예외가 발생한다.", () => {
    expect(() => {
      new Consumer('31001');
    }).toThrow(`[ERROR]: ${purchaseAmountValidation.isDivisibleByOneThousand.errorMessage}`);
  });

  test("구입금액이 양의 정수가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new Consumer('-2300');
    }).toThrow(`[ERROR]: ${purchaseAmountValidation.isPositive.errorMessage}`);
  });
});
