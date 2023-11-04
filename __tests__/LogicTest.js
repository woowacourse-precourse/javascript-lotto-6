import { Console } from "@woowacourse/mission-utils";
import App from "../src/App";
import LottoResult from "../src/LottoResult";
import LottoStatistics from "../src/LottoStatistics";
import { PRIZE_CATEGORIES, LOTTO_PRICE, PRIZES } from "../src/constants";

jest.mock("@woowacourse/mission-utils", () => {
  return {
    Console: {
      print: jest.fn(),
    },
  };
});

describe("App 클래스 로직 테스트", () => {
  let app;

  beforeEach(() => {
    app = new App();
    app.lottos = [{ getNumbers: () => [1, 2, 3, 4, 5, 6] }];
    Console.print.mockClear();
  });

  test("printLottos는 구매한 로또 번호들을 올바르게 출력해야 한다", () => {
    app.printLottos();

    expect(Console.print).toHaveBeenCalledTimes(2);
    expect(Console.print).toHaveBeenCalledWith("\n1개를 구매했습니다.");
    expect(Console.print).toHaveBeenCalledWith("[1, 2, 3, 4, 5, 6]");
  });

  test("printResults는 당첨 결과를 올바르게 출력해야 한다", () => {
    const results = {
      prizeOrder: ["3", "4", "5", "5+1", "6"],
      prizeStrings: {
        "5+1": "5개 일치, 보너스 볼 일치",
        3: "3개 일치",
        4: "4개 일치",
        5: "5개 일치",
        6: "6개 일치",
      },
      prizes: PRIZES,
      resultCounts: { 6: 1 },
      statistics: {
        resultCounts: { 3: 0, 4: 0, 5: 0, "5+1": 0, 6: 1 },
        roi: 100,
      },
    };

    app.printResults(results);

    expect(Console.print.mock.calls.length).toBeGreaterThanOrEqual(4);
    expect(
      Console.print.mock.calls.some((call) => call[0] === "\n당첨 통계\n---")
    ).toBe(true);
    expect(
      Console.print.mock.calls.some((call) => call[0].includes("6개 일치"))
    ).toBe(true);
    expect(
      Console.print.mock.calls.some((call) =>
        call[0].includes("총 수익률은 100%입니다.")
      )
    ).toBe(true);
  });

  test("getResults는 올바른 결과 객체를 반환해야 한다", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const results = app.getResults(winningNumbers, bonusNumber);

    expect(results).toHaveProperty("statistics");
    expect(results.statistics).toHaveProperty("roi");
    expect(results).toHaveProperty("prizeOrder");
    expect(results).toHaveProperty("prizeStrings");
    expect(results).toHaveProperty("prizes");
    expect(results).toHaveProperty("resultCounts");
  });

  test("getPrizeData는 올바른 상금 데이터 객체를 반환해야 한다", () => {
    const sampleResults = ["3", "4", "5", "5+1", "6"].map((category) => ({
      prizeCategory: category,
    }));
    const prizeData = app.getPrizeData(sampleResults);

    expect(prizeData).toHaveProperty("prizeOrder");
    expect(prizeData).toHaveProperty("prizeStrings");
    expect(prizeData).toHaveProperty("prizes");
    expect(prizeData).toHaveProperty("resultCounts");
  });

  test("calculateResultCounts는 각 등수의 총 개수를 포함하는 객체를 올바르게 반환해야 한다.", () => {
    const mockResults = ["3", "3", "4", "5", "5+1", "6"];

    const resultCounts = app.calculateResultCounts(mockResults);

    expect(resultCounts["3"]).toBe(2);
    expect(resultCounts["4"]).toBe(1);
    expect(resultCounts["5"]).toBe(1);
    expect(resultCounts["5+1"]).toBe(1);
    expect(resultCounts["6"]).toBe(1);
  });
});

describe("LottoResult 클래스 로직 테스트", () => {
  const winningNumbers = [10, 11, 12, 13, 14, 15];
  const bonusNumber = 16;

  let lottoResult;
  beforeEach(() => {
    lottoResult = new LottoResult(winningNumbers, bonusNumber);
  });

  test("모든 숫자가 일치하지 않으면 꽝이다", () => {
    const lottos = [{ getNumbers: () => [1, 2, 3, 4, 5, 6] }];
    const results = lottoResult.calculateResults(lottos);
    expect(results).toEqual([PRIZE_CATEGORIES.NONE]);
  });

  test("1개 또는 2개의 번호가 일치하면 꽝이다", () => {
    const lottos = [{ getNumbers: () => [1, 2, 3, 4, 10, 11] }];
    const results = lottoResult.calculateResults(lottos);
    expect(results).toEqual([PRIZE_CATEGORIES.NONE]);
  });

  test("3개의 번호가 일치하면 5등이다", () => {
    const lottos = [{ getNumbers: () => [1, 2, 3, 10, 11, 12] }];
    const results = lottoResult.calculateResults(lottos);
    expect(results).toEqual([PRIZE_CATEGORIES.FIFTH]);
  });

  test("4개의 번호가 일치하면 4등이다", () => {
    const lottos = [{ getNumbers: () => [1, 2, 10, 11, 12, 13] }];
    const results = lottoResult.calculateResults(lottos);
    expect(results).toEqual([PRIZE_CATEGORIES.FOURTH]);
  });

  test("5개의 번호가 일치하면 3등이다", () => {
    const lottos = [{ getNumbers: () => [1, 10, 11, 12, 13, 14] }];
    const results = lottoResult.calculateResults(lottos);
    expect(results).toEqual([PRIZE_CATEGORIES.THIRD]);
  });

  test("5개의 번호와 보너스 번호가 일치하면 2등이다", () => {
    const lottos = [{ getNumbers: () => [10, 11, 12, 13, 14, 16] }];
    const results = lottoResult.calculateResults(lottos);
    expect(results).toEqual([PRIZE_CATEGORIES.SECOND]);
  });

  test("6개의 번호가 모두 일치하면 1등이다", () => {
    const lottos = [{ getNumbers: () => [10, 11, 12, 13, 14, 15] }];
    const results = lottoResult.calculateResults(lottos);
    expect(results).toEqual([PRIZE_CATEGORIES.FIRST]);
  });
});

describe("LottoStatistics 클래스 테스트", () => {
  let lottos;
  let lottoStatistics;

  beforeEach(() => {
    lottos = [{ getNumbers: () => [1, 2, 3, 4, 5, 6] }];
    lottoStatistics = new LottoStatistics(lottos, LOTTO_PRICE);

    jest
      .spyOn(lottoStatistics, "countResults")
      .mockImplementation((results) => {
        return results.reduce((acc, result) => {
          acc[result] = (acc[result] || 0) + 1;
          return acc;
        }, {});
      });

    jest
      .spyOn(lottoStatistics, "calculateTotalPrizeMoney")
      .mockImplementation((resultCounts) => {
        return Object.entries(resultCounts).reduce((acc, [result, count]) => {
          return acc + PRIZES[result] * count;
        }, 0);
      });
  });

  test("calculateInvestment는 구매한 로또의 총 가격을 올바르게 반환해야 한다", () => {
    const investment = lottoStatistics.calculateInvestment();
    expect(investment).toBe(lottos.length * LOTTO_PRICE);
  });

  test("countResults는 당첨 결과에 따른 개수를 정확하게 집계해야 한다", () => {
    const results = ["3", "3", "4", "5", "5+1", "6"];
    const countedResults = lottoStatistics.countResults(results);
    expect(countedResults["3"]).toBe(2);
    expect(countedResults["4"]).toBe(1);
    expect(countedResults["5"]).toBe(1);
    expect(countedResults["5+1"]).toBe(1);
    expect(countedResults["6"]).toBe(1);
  });

  test("calculateTotalPrizeMoney는 당첨 결과에 따른 총 상금을 정확하게 계산해야 한다", () => {
    const resultCounts = { 3: 2, 4: 1, 5: 1, "5+1": 1, 6: 1 };
    const totalPrizeMoney =
      lottoStatistics.calculateTotalPrizeMoney(resultCounts);
    const expectedTotalPrizeMoney =
      PRIZES["3"] * 2 +
      PRIZES["4"] * 1 +
      PRIZES["5"] * 1 +
      PRIZES["5+1"] * 1 +
      PRIZES["6"] * 1;

    expect(totalPrizeMoney).toBe(expectedTotalPrizeMoney);
  });

  test("calculateROI는 수익률을 올바르게 계산해야 한다", () => {
    const lottos = [{ getNumbers: () => [1, 2, 3, 4, 5, 6] }];
    const lottoResult = new LottoResult([1, 2, 3, 4, 5, 6], 7);

    const results = lottoResult.calculateResults(lottos);

    const lottoStatistics = new LottoStatistics(lottos, LOTTO_PRICE);
    const statistics = lottoStatistics.calculateStatistics(results);

    const expectedROI =
      ((PRIZES[PRIZE_CATEGORIES.FIRST] *
        results.filter((result) => result === PRIZE_CATEGORIES.FIRST).length) /
        (lottos.length * LOTTO_PRICE)) *
      100;

    expect(statistics.roi).toBeCloseTo(expectedROI, 1);
  });
});
