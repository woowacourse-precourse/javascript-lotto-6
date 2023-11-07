import Money from "../src/model/Money.js";

describe("Money 클래스 테스트", () => {
  test("Money 클래스 생성 테스트", async () => {
    const money = new Money(1000);
    expect(await money.getMoney()).toBe(1000);
  });

  test("Money에 음수가 들어오면 예외가 발생한다.", () => {
    expect(() => {
      new Money(-1000);
    }).toThrow("[ERROR]");
  });

  test("Money에 숫자가 아닌 값이 들어오면 예외가 발생한다.", () => {
    expect(() => {
      new Money("abc");
    }).toThrow("[ERROR]");
  });

  test("Money에 0이 들어오면 예외가 발생한다.", () => {
    expect(() => {
      new Money(0);
    }).toThrow("[ERROR]");
  });
});
