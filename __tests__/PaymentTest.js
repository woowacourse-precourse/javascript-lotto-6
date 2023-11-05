import * as valid from "../src/Validation.js";

describe("지불 비용 테스트", () => {
  test("지불된 비용이 공백이면 예외가 발생한다.", () => {
    expect(() => {
      valid.paymentCheck("");
    }).toThrow("[ERROR]");
  });

  test("지불된 비용에 공백이 섞이면 예외가 발생한다.", () => {
    expect(() => {
      valid.paymentCheck("1 1");
    }).toThrow("[ERROR]");
  });

  test("지불된 비용이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      valid.paymentCheck("abc");
    }).toThrow("[ERROR]");
  });

  test("지불된 비용이 1000으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      valid.paymentCheck("1234");
    }).toThrow("[ERROR]");
  });
});
