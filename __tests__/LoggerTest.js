import Logger from "../src/core/Logger.js";
import { getLogSpy } from "./utils";

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
});
