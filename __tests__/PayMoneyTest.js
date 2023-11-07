import PayMoney from "../src/Model/PayMoney.js";

describe("PayMoney 클래스 테스트", () => {
  test("구매 금액의 돈이 1000원 미만이면 예외가 발생한다.", () => {
    expect(() => {
      new PayMoney(999);
    }).toThrow("[ERROR]");
  });

  test("구매금액이 1000으로 나눠 떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new PayMoney(1010);
    }).toThrow("[ERROR]");
  });
  
  test("구매 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new PayMoney("1wootech");
    }).toThrow("[ERROR]");
  });

  test("구매 금액 10000원 이면 정상 작동한다", () => {
    expect(() => {
      new PayMoney(10000);
    }).not.toThrow("[ERROR]");
  });

});
