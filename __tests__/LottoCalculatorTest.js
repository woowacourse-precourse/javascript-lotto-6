import LottoCalculator from "../src/Model/LottoCalculator.js";

describe("LottoCalculator 클래스 테스트", () => {
  test("calculateStatistics(): 6개 일치일 때 적절한 통계를 계산한다.", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const totalSets = 1;
    const calculator = new LottoCalculator(winningNumbers, totalSets);
    const userNumbers = [[1, 2, 3, 4, 5, 6]];

    const statistics = calculator.calculateStatistics(userNumbers);
    expect(statistics["6"]).toBe(1);
    expect(statistics.totalPrize).toBe(2_000_000_000);
    expect(statistics.profitRate).toBe(200000000);
  });

  test("calculateStatistics(): 2개 일치일 때 적절한 통계를 계산한다.", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const totalSets = 1;
    const calculator = new LottoCalculator(winningNumbers, totalSets);
    const userNumbers = [[7, 8, 9, 10, 11, 12]];

    const statistics = calculator.calculateStatistics(userNumbers);
    expect(statistics.totalPrize).toBe(0);
    expect(statistics.profitRate).toBe(0);
  });
});
