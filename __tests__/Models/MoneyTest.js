import Money from "../../src/Models/Money.js";

describe("Money 클래스 테스트", () => {
  test("1,000과 1.0000 포맷의 금액도 입력 받을 수 있어야 한다.", () => {
    expect(new Money("1,000").getMoney()).toBe(1000);
    expect(new Money("1.000").getMoney()).toBe(1000);
  });
});
