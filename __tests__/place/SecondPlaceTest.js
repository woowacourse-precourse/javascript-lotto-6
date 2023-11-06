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

  test("2등 테스트", async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([
      [8, 10, 19, 24, 28, 44],
      [3, 21, 23, 26, 28, 31],
      [14, 15, 20, 25, 35, 43],
      [10, 12, 26, 31, 39, 44],
      [2, 16, 20, 24, 31, 38],
      [8, 13, 14, 16, 20, 30],
      [4, 21, 25, 34, 35, 41],
      [3, 4, 5, 6, 15, 28],
      [8, 12, 27, 36, 38, 39],
    ]);
    mockQuestions(["9000", "3, 4, 5, 6, 13, 15", "28"]);

    // when
    const app = new App();
    await app.play();

    const logs = [
      "9개를 구매했습니다.",
      "[8, 10, 19, 24, 28, 44]",
      "[3, 21, 23, 26, 28, 31]",
      "[14, 15, 20, 25, 35, 43]",
      "[10, 12, 26, 31, 39, 44]",
      "[2, 16, 20, 24, 31, 38]",
      "[8, 13, 14, 16, 20, 30]",
      "[4, 21, 25, 34, 35, 41]",
      "[3, 4, 5, 6, 15, 28]",
      "[8, 12, 27, 36, 38, 39]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 333333.3%입니다.",
    ];
    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
