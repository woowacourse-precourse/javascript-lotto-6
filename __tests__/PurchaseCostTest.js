import PurchaseCost from "../src/PurchaseCost.js";

describe("구매 금액 클래스 테스트", () => {
  test("구매 금액을 입력하지 못하면 예외가 발생한다.", () => {
    expect(() => {
      new PurchaseCost('');
    }).toThrow("[ERROR]");
  });

  test.each([
    '천원',
    '!@#$%^&*()_+',
    '1,234',
    '1,000',
    '1000won',
    '1000원',
  ])("구매 금액에 문자가 포함되어 있으면 예외가 발생한다.", (input) => {
    expect(() => {
      new PurchaseCost(input);
    }).toThrow("[ERROR]");
  });

  test.each([
    '001',
    '100',
    '123',
    '1001',
  ])("구매 금액이 1,000원 단위가 아니면 예외가 발생한다.", (input) => {
    expect(() => {
      new PurchaseCost(input);
    }).toThrow("[ERROR]");
  });
});