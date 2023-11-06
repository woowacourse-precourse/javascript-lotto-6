import Dashboard from "../src/Dashboard.js";
import Lotto from "../src/Lotto.js";
import LuckyNumbers from "../src/LuckyNumbers.js";
import { Console } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe("로또 결과 테스트", () => {
  let dashboard;
  beforeEach(async () => {
    const luckyNumbers = new LuckyNumbers();
    const INPUT = ["1, 2, 3, 4, 5, 6", "7"];

    mockQuestions([...INPUT]);

    await luckyNumbers.setWinningNumbers();
    await luckyNumbers.setBonusNumber();

    dashboard = new Dashboard(luckyNumbers);
  });

  test.each([
    {
      lottoNumbers: [1, 2, 3, 8, 9, 10],
      expectedMatchedCount: 3,
    },
    {
      lottoNumbers: [1, 2, 3, 4, 5, 7],
      expectedMatchedCount: 5,
    },
    {
      lottoNumbers: [10, 11, 12, 13, 14, 7],
      expectedMatchedCount: 0,
    },
  ])("맞춘 개수 반환 테스트", ({ lottoNumbers, expectedMatchedCount }) => {
    const matchedCount = dashboard.getMatchedNumberCount(lottoNumbers);

    expect(matchedCount).toBe(expectedMatchedCount);
  });

  test.each([
    {
      lotto: new Lotto([1, 2, 3, 8, 9, 10]),
      expectedRank: 5,
    },
    {
      lotto: new Lotto([1, 2, 3, 4, 5, 7]),
      expectedRank: 2,
    },
    {
      lotto: new Lotto([10, 11, 12, 13, 14, 7]),
      expectedRank: null,
    },
  ])("assignLottoRank 메서드 테스트", ({ lotto, expectedRank }) => {
    const rank = dashboard.assignLottoRank(lotto);

    expect(rank).toBe(expectedRank);
  });

  test("updateDashboard 메서드 테스트", () => {
    dashboard.updateDashboard(1);
    dashboard.updateDashboard(5);
    dashboard.updateDashboard(4);
    dashboard.updateDashboard(5);
    dashboard.updateDashboard(null);

    expect(dashboard.rankCount).toStrictEqual([1, 0, 0, 1, 2]);
  });

  test("수익률 계산 테스트 1", () => {
    dashboard.updateDashboard(5);
    const earningsRate = dashboard.calculateEarnings(8000);

    expect(earningsRate).toBe("62.5%");
  });

  test("수익률 계산 테스트 2", () => {
    dashboard.updateDashboard(1);
    dashboard.updateDashboard(5);
    dashboard.updateDashboard(4);
    dashboard.updateDashboard(5);

    const earningsRate = dashboard.calculateEarnings(8000);

    expect(earningsRate).toBe("25000750.0%");
  });
});
