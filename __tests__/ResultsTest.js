import { Results } from "../src/Results.js"; 
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};


describe("당첨 통계 테스트", () => {
  test("당첨 내역을 모두 출력한다.", () => {
    //given
    const logSpy = getLogSpy();

    const lottos = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    const winningLotto = [1, 2, 3, 4, 5, 6];
    const BONUS_NUMBER = 7;
    const COUNTS = 8;

    //when
    new Results(lottos, winningLotto, BONUS_NUMBER, COUNTS)

    //then
    const logs = [
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test.each([
    [[1, 2, 3, 7, 8, 9], "3개 일치 (5,000원) - 3개"],
    [[7, 8, 9, 10, 1, 2], "4개 일치 (50,000원) - 1개"],
    [[13, 14, 15, 16, 17, 19], "5개 일치 (1,500,000원) - 1개"],
    [[19, 20, 21, 22, 23, 25], "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개"],
    [[37, 38, 39, 40, 41, 42], "6개 일치 (2,000,000,000원) - 1개"],
  ])("개별 당첨 출력을 확인한다.", (winningLotto, log) => {
    //given
    const logSpy = getLogSpy();

    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
      [19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 29, 30],
      [31, 32, 33, 34, 35, 36],
      [37, 38, 39, 40, 41, 42],
      [43, 44, 45, 1, 2, 3],
    ];
    const BONUS_NUMBER = 24;
    const COUNTS = 8;

    //when
    new Results(lottos, winningLotto, BONUS_NUMBER, COUNTS)

    //then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });

  test("총 수익률을 모두 출력한다.", () => {
    //given
    const logSpy = getLogSpy();

    const lottos = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];
    const winningLotto = [1, 2, 3, 4, 5, 6];
    const BONUS_NUMBER = 7;
    const COUNTS = 8;
    const PRIZE = 5000;
    const MONEY = 8000;

    //when
    const results = new Results(lottos, winningLotto, BONUS_NUMBER, COUNTS)
    results.totalRate(MONEY, PRIZE)

    //then
    const log = "총 수익률은 62.5%입니다.";

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
});