import { MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "../src/view/OutputView";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("OutputView 클래스 테스트", () => {
  const outputView = new OutputView();
  test("구입 결과 메세지 출력 테스트", () => {
    const logSpy = getLogSpy();

    const logs = ["1개를 구매했습니다.", "[1, 2, 3, 4, 5, 6]"];

    const purchaseNumber = 1;
    const randomNumbers = [[1, 2, 3, 4, 5, 6]];

    outputView.purchaseResultView(purchaseNumber, randomNumbers);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("당첨 결과 메세지 출력 테스트", () => {
    const logSpy = getLogSpy();

    const logs = [
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 0.0%입니다.",
    ];

    const winningResult = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };
    const rate = "0.0";

    outputView.winningResultView(winningResult, rate);

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
