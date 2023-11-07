import Amounts from "../src/settings/Amounts";

describe("구매 금액 클래스 테스트", () => {
  test("구매 금액을 입력하지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Amounts();
    }).toThrow("[ERROR]");
  });

  test("구매 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Amounts('a');
    }).toThrow("[ERROR]")
  });

  test("구매 금액이 자연수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Amounts(1000.2);
    }).toThrow("[ERROR]")
  });

  test("구매 금액이 로또 가격인 1000으로 나눠지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Amounts(12400);
    }).toThrow("[ERROR]")
  });
})