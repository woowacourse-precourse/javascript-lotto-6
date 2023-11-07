import Statistics from "../src/Statistics.js";

describe("Statistics 클래스 테스트", () => {
  test("calculateProfitRate 메서드가 수익률을 정확하게 계산한다.", () => {
    const results = [
      { matchingNumbers: 0, bonusMatch: false },
      { matchingNumbers: 3, bonusMatch: false },
      { matchingNumbers: 0, bonusMatch: false },
      { matchingNumbers: 0, bonusMatch: false },
      { matchingNumbers: 0, bonusMatch: false },
      { matchingNumbers: 0, bonusMatch: true },
      { matchingNumbers: 0, bonusMatch: false },
      { matchingNumbers: 0, bonusMatch: true },
    ];
    const purchaseAmount = 8000;

    const statistics = new Statistics(results);
    const result = statistics.calculateProfitRate(purchaseAmount);

    expect(result).toBeCloseTo(62.5, 1);
  });
});
