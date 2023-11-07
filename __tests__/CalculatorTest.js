import Calculator from "../src/services/Calculator.js";

describe("수익률 계산기 성능 테스트", () => {
  const calculator = new Calculator();
  test("수익률은 소수점 두번째자리에서 반올림 되어야 한다.", () => {
    calculator.calculateRevenue(5000, 8000);
    expect(calculator.revenue).toBe("62.5");
  });
});
