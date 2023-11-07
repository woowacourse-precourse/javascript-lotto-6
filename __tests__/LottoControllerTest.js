import LottoController from "../src/controller/LottoController";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("LottoController 테스트", () => {
  test("통합 테스트(미당첨)", async () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 6],
    ]);
    mockQuestions(["3000", "7,8,9,10,11,12", "13"]);

    const lottoController = new LottoController();
    await lottoController.process();

    const logs = [
      "3개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 6]",
      "[1, 2, 3, 4, 5, 6]",
      "[1, 2, 3, 4, 5, 6]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 0.0%입니다.",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("통합 테스트(당첨)", async () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 7, 8],
      [1, 2, 3, 7, 8, 9],
    ]);
    mockQuestions(["5000", "1,2,3,4,5,6", "7"]);

    const lottoController = new LottoController();
    await lottoController.process();

    const logs = [
      "5개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 6]",
      "[1, 2, 3, 4, 5, 7]",
      "[1, 2, 3, 4, 5, 8]",
      "[1, 2, 3, 4, 7, 8]",
      "[1, 2, 3, 7, 8, 9]",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 1개",
      "총 수익률은 40631100.0%입니다.",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
