import Purchase from "../src/model/Purchase";

describe("로또 구매 클래스 테스트", () => {
  test("로또 구매 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Purchase(NaN);
    }).toThrow("[ERROR]");
    expect(() => {
      new Purchase("백만원");
    }).toThrow("[ERROR]");
    expect(() => {
      new Purchase(undefined);
    }).toThrow("[ERROR]");
  });
  test("로또 구매 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Purchase(1500);
    }).toThrow("[ERROR]");
    expect(() => {
      new Purchase(999);
    }).toThrow("[ERROR]");
  });
});
