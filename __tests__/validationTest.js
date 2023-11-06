/* eslint-disable */

import { validatePurchase } from "../src/utils/validation.js";

describe("validation 모듈 테스트", () => {
  test("구입액에 빈 값을 입력하면 예외가 발생한다.", () => {
    expect(() => validatePurchase("")).toThrow("[ERROR]");
  });

  test("구입액에 문자가 포함되면 예외가 발생한다.", () => {
    expect(() => validatePurchase("100a")).toThrow("[ERROR]");
  });

  test("구입액이 1000으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => validatePurchase("1200")).toThrow("[ERROR]");
  });
});
