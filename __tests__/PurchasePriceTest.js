import PurchasePrice from "../src/PurchasePrice.js";

describe("구입 금액 클래스 테스트", () => {
  test("구입 금액이 1000으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new PurchasePrice(1555);
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new PurchasePrice("lott0");
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1000보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      new PurchasePrice(-1000);
    }).toThrow("[ERROR]");
  });
});
