import GetPurchaseAmount from "../src/GetPurchaseAmount.js";

describe("구매 금액 클래스 테스트", () => {
  test("구매 금액이 1000으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new GetPurchaseAmount(10500);
    }).toThrow("[ERROR]");
  });

  test("구매 금액이 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new GetPurchaseAmount("abc");
    }).toThrow("[ERROR]");
  });
});
