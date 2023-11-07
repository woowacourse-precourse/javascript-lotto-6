import Purchase from "../src/Purchase";

describe("복권 구매 금액 테스트", () => {
  test("지불 금액이 1000원 이하인 경우 예외가 발생한다.", () => {
    expect(() => {
      new Purchase(900);
    }).toThrow("[ERROR]");
  });

  test("지불 금액이 1000원 단위가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new Purchase(1200)
    }).toThrow("[ERROR]");
  })

  test("지불 금액이 숫자가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new Purchase("junho1000")
    }).toThrow("[ERROR]");
  })
});
