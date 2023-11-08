import Logger from "../src/core/console/Logger.js";
import { getLogSpy } from "./utils.js";

describe("Logger 클래스 테스트", () => {
  /** @type {Logger} */
  let logger;

  beforeEach(() => {
    logger = new Logger();
  });

  test("로또 번호 출력 테스트", () => {
    const input = [
      [9, 8, 7, 6, 5, 4],
      [1, 2, 4, 3, 5, 6],
    ];
    const logs = [
      "2개를 구매했습니다.",
      "[4, 5, 6, 7, 8, 9]",
      "[1, 2, 3, 4, 5, 6]",
    ];

    const logSpy = getLogSpy();

    logger.printLottoNumbers(input);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("당첨 통계 출력 테스트", () => {
    const input = [
      {
        three: 2,
        four: 4,
        five: 10,
        bonusFive: 0,
        six: 1,
      },
      34.454444,
    ];
    const logs = [
      "당첨 통계",
      "---",
      "3개 일치 (5,000원) - 2개",
      "4개 일치 (50,000원) - 4개",
      "5개 일치 (1,500,000원) - 10개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 1개",
      "총 수익률은 34.5%입니다.",
    ];

    const logSpy = getLogSpy();

    logger.printWinningBoard(input[0], input[1]);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
