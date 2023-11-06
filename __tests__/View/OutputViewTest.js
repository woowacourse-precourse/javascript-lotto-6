import { MissionUtils } from "@woowacourse/mission-utils";

import OutputView from "../../src/View/OutputView";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("출력 메시지 테스트", () => {
  test("Test 1. 로또 구매 개수 출력", () => {
    const logSpy = getLogSpy();
    const count = 10;
    const output = `총 ${count}개를 구매했습니다.`;

    OutputView.printLottoCnt(count);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });

  test("Test 2. 로또 번호 출력", () => {
    const logSpy = getLogSpy();
    const numbers = [1, 2, 3, 4, 5, 6];
    const output = `[${numbers.join(", ")}]`;

    OutputView.printLottoNumbers(numbers);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });

  test("Test 3. 당첨 내역을 출력한다", () => {
    const logSpy = getLogSpy();
    const gameResult = {
      fifth: 1,
      fourth: 0,
      third: 1,
      second: 1,
      first: 0
    };

    const money = 10000;
    const logs = [
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 0개",
    ];

    OutputView.printLottoResult(gameResult, money);
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("Test 4. 수익률을 출력한다", () => {
    const logSpy = getLogSpy();
    const totalPrize = 5000;
    const money = 8000;
    const output = `총 수익률은 62.5%입니다.`;

    OutputView.printProfit(totalPrize, money);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});