import Result from "../src/domains/Result.js";

describe("Result 클래스 테스트", () => {
  test.each([
    {
      totalPrize: 1500000,
      investment: 2000,
      expectedRate: 75000,
    },
    {
      totalPrize: 50000,
      investment: 5000,
      expectedRate: 1000,
    },
  ])("당첨 수익률 계산", ({ totalPrize, investment, expectedRate }) => {
    const result = new Result();
    const rate = result.getRoi(totalPrize, investment);

    expect(rate).toBe(expectedRate);
  });
});
