import Purchase from "../src/model/Purchase";

describe("구매 클래스 테스트", () => {
  test("구매 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Purchase("a");
    }).toThrow("[ERROR]");
  });

  test("구매 금액이 음수면 예외가 발생한다.", () => {
    expect(() => {
      new Purchase(-1000);
    }).toThrow("[ERROR]");
  });

  test("구매 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Purchase(1500);
    }).toThrow("[ERROR]");
  });
});
