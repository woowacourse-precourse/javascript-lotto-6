import Customer from "../src/Customer";

describe("고객 클래스 테스트", () => {
  test("지불한 금액이 1,000원으로 나누어떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Customer(1001);
    }).toThrow("[ERROR]");
  });

  test("지불한 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Customer("100원");
    }).toThrow("[ERROR]");
  });

  test("지불한 금액이 0으로 시작하면 예외가 발생한다.", () => {
    expect(() => {
      new Customer(0);
    }).toThrow("[ERROR]");
  });

});
