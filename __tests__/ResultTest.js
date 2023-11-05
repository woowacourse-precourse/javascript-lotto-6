import { MissionUtils } from "@woowacourse/mission-utils";
import Result from "../src/Result";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("Result 클래스 테스트", () => {
  test("countMatchingNumbers 함수", () => {
    const result = new Result();
    result.countMatchingNumbers(3);
    result.countMatchingNumbers(4);
    result.countMatchingNumbers(7);

    const logSpy = getLogSpy();

    result.printResult();

    const logs = [
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 0개",
    ];
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
