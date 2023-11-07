import Buy from "../src/Buy";

describe("구매 클래스 테스트", () => {
  test("구매 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Buy("육천원");
    }).toThrow("[ERROR]");
  });

  test("구매 금액이 천 원 단위가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Buy("1500");
    }).toThrow("[ERROR]");
  });
});
