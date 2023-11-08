import { Console, Random } from "@woowacourse/mission-utils";
import Store from "../src/Store.js";

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const getRankCountMap = () => {
  const rankCountMapOutput = new Map([
    [1, 1],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 1],
  ]);
  return rankCountMapOutput;
};

function lottoIssue(store, randomMockInput, lottoMockAmount) {
  mockRandoms(randomMockInput);
  store.calculateLottoAmount = jest.fn().mockReturnValue(lottoMockAmount);
  store.issueLotto();
  Random.pickUniqueNumbersInRange.mockClear();
}

describe("스토어 클래스 테스트", () => {
  test("구입 금액에 따른 로또 개수를 올바르게 구하는지 테스트", async () => {
    const store = new Store();
    Store.inputMoney = jest.fn().mockReturnValue(5000);
    await store.receivePayment();
    expect(store.calculateLottoAmount()).toBe(5);
  });

  test("로또 발행 테스트", () => {
    const store = new Store();
    const logSpy = getLogSpy();
    const outputs = ["[8, 21, 23, 41, 42, 43]", "[3, 5, 11, 16, 32, 38]"];

    const LOTTO_AMOUNT = 2;
    const RANDOM_INPUT = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
    ];

    lottoIssue(store, RANDOM_INPUT, LOTTO_AMOUNT);

    for (const output of outputs) {
      expect(logSpy).toHaveBeenCalledWith(output);
    }
  });

  test("등수 계산하기 테스트", () => {
    const outputs = [2, 1];
    const compareResultList = [
      { sameNumberCount: 5, bonusIsSame: true },
      { sameNumberCount: 6, bonusIsSame: false },
    ];

    const logSpy = jest.spyOn(Store, "calculateRank");
    logSpy.mockClear();

    for (const compareResult of compareResultList) {
      Store.calculateRank(compareResult);
    }
    for (const output of outputs) {
      expect(logSpy).toHaveReturnedWith(output);
    }
  });

  test("등수 통계 산출하기 테스트", () => {
    const store = new Store();
    const rankCountMapOutput = getRankCountMap();

    const LOTTO_AMOUNT = 2;
    const RANDOM_INPUT = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 11, 12, 13],
    ];

    lottoIssue(store, RANDOM_INPUT, LOTTO_AMOUNT);

    expect(store.calculateRankStatistics([1, 2, 3, 4, 5, 6], 7)).toEqual(
      rankCountMapOutput
    );
  });

  test("복권 당첨 내역 메시지 생성하기 테스트", () => {
    const rankCountMap = getRankCountMap();
    const messageOutput =
      "3개 일치 (5,000원) - 1개\n" +
      "4개 일치 (50,000원) - 0개\n" +
      "5개 일치 (1,500,000원) - 0개\n" +
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개\n" +
      "6개 일치 (2,000,000,000원) - 1개\n";
    expect(Store.generateWinningMessage(rankCountMap)).toBe(messageOutput);
  });
});
