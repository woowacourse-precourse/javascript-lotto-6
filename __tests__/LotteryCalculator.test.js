import LotteryCalculator from "../src/LotteryCalculator";

describe("LotteryCalculator 테스트", () => {
  test("총 수익금 계산 테스트", () => {
    const results = [
      { rank: "FIRST", count: 1 },
      { rank: "SECOND", count: 1 },
      { rank: "THIRD", count: 1 },
      { rank: "FOURTH", count: 1 },
      { rank: "FIFTH", count: 1 },
    ];
    expect(LotteryCalculator.totalPrize(results)).toBe(2031555000);
  });
  test("수익률 계산 테스트", () => {
    const totalPrize = 55000;
    const purchaseAmount = 5000;
    expect(LotteryCalculator.profit(totalPrize, purchaseAmount)).toBe("1100.0");
  });
});
