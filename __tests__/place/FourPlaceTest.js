import App from "../../src/App.js";
import { Console, Random } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

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

describe("LottoGame 정상 진행 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("4등 테스트", async () => {
    //given
    const logSpy = getLogSpy();
    mockRandoms([
      [7, 9, 23, 24, 26, 36],
      [7, 22, 31, 37, 41, 45],
      [4, 14, 20, 31, 37, 45],
      [14, 15, 24, 34, 42, 44],
    ]);
    mockQuestions(["4000", "14,15,24,34,5,6", "7"]);

    // when
    const app = new App();
    await app.play();

    const logs = [
      "4개를 구매했습니다.",
      "[7, 9, 23, 24, 26, 36]",
      "[7, 22, 31, 37, 41, 45]",
      "[4, 14, 20, 31, 37, 45]",
      "[14, 15, 24, 34, 42, 44]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 1250.0%입니다.",
    ];
    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
