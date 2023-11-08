import { MissionUtils } from "@woowacourse/mission-utils";
import Output from "../src/Output.js";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("Output - writeReturnRate 함수 테스트", () => {
  test("올바르게 통계를 출력한다.", () => {
    // given
    const logSpy = getLogSpy();

    const result = {
      fifth: { count: 3, prize: 5000, matched: 1 },
      fourth: { count: 4, prize: 50000, matched: 0 },
      third: { count: 5, bonus: false, prize: 1500000, matched: 0 },
      second: { count: 5, bonus: true, prize: 30000000, matched: 0 },
      first: { count: 6, prize: 2000000000, matched: 0 },
    };

    // when
    Output.writeLottoStatics(result);

    // then
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
});

describe("Output - writeLottoStatics 함수 테스트", () => {
  test("올바르게 통계를 출력한다.", () => {
    // given
    const logSpy = getLogSpy();

    const result = {
      fifth: { count: 3, prize: 5000, matched: 1 },
      fourth: { count: 4, prize: 50000, matched: 0 },
      third: { count: 5, bonus: false, prize: 1500000, matched: 0 },
      second: { count: 5, bonus: true, prize: 30000000, matched: 0 },
      first: { count: 6, prize: 2000000000, matched: 0 },
    };
    const payment = 8000;

    // when
    Output.writeReturnRate(result, payment);

    // then
    const logs = ["총 수익률은 62.5%입니다."];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
