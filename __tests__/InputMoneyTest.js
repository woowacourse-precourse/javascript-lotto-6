import Buyer from "../src/Buyer";

describe("구입 금액 검사", () => {
  const buyer = new Buyer();

  test("구입 금액이 1,000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      buyer.vaildateMoney("1500");
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1,000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      buyer.vaildateMoney(1500);
    }).toThrow("[ERROR]");
  });

  test("구입 금액이 1,000원 미만이면 예외가 발생한다.", () => {
    expect(() => {
      buyer.vaildateMoney(0);
    }).toThrow("[ERROR]");
  });
});
