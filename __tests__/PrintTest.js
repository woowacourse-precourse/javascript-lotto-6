import { MissionUtils } from "@woowacourse/mission-utils";
import outputView from "../src/views/Output.js";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("출력 테스트", () => {
  let logSpy;
  beforeEach(() => {
    logSpy = getLogSpy();
  });

  test("구매한 로또를 넘기면 개수와 번호를 출력한다.", () => {
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
    ];
    const logs = [
      "3개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 6]",
      "[7, 8, 9, 10, 11, 12]",
      "[13, 14, 15, 16, 17, 18]",
    ];

    outputView.printPurchasedLottos(lottos);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("당첨된 개수를 순위별로 출력한다.", () => {
    const matches = [1, 0, 0, 0, 1];
    const logs = [
      "당첨 통계",
      "---",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 1개",
    ];

    outputView.printWinningStatistics(matches);

    logs.forEach((log) =>
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log))
    );
  });

  test("총 수익률을 출력한다.", () => {
    const totalReturn = 62.5;
    outputView.printTotalReturn(totalReturn);

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("총 수익률은 62.5%입니다.")
    );
  });
});
