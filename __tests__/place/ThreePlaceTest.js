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

  test("3등 테스트", async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([
      [4, 7, 8, 18, 33, 36],
      [8, 11, 19, 25, 27, 33],
      [1, 5, 7, 8, 19, 34],
      [4, 17, 18, 20, 24, 36],
      [20, 21, 25, 27, 44, 45],
      [4, 16, 23, 31, 36, 45],
    ]);
    mockQuestions(["6000", "20, 21, 25, 27, 44, 15", "28"]);

    // when
    const app = new App();
    await app.play();

    const logs = [
      "6개를 구매했습니다.",
      "[4, 7, 8, 18, 33, 36]",
      "[8, 11, 19, 25, 27, 33]",
      "[1, 5, 7, 8, 19, 34]",
      "[4, 17, 18, 20, 24, 36]",
      "[20, 21, 25, 27, 44, 45]",
      "[4, 16, 23, 31, 36, 45]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 25000.0%입니다.",
    ];
    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
