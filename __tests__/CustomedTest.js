import App from "../src/App.js";
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

const runException = async (input) => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "7"];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

  // when
  const app = new App();
  await app.play();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
};

describe("로또 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("기능 테스트", async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([
      [9, 23, 24, 28, 38, 42],
      [16, 23, 37, 39, 42, 43],
      [5, 11, 14, 21, 25, 42],
      [3, 9, 18, 29, 34, 41],
      [1, 17, 22, 28, 29, 38],
      [6, 8, 26, 29, 33, 35],
      [4, 5, 7, 27, 41, 44],
      [4, 15, 17, 22, 34, 36],
      [2, 10, 15, 31, 37, 39],
      [4, 5, 26, 27, 29, 35],
    ]);
    mockQuestions(["10000", "23,29,37,39,41,42", "3"]);

    // when
    const app = new App();
    await app.play();

    // then
    const logs = [
      "10개를 구매했습니다.",
      "[9, 23, 24, 28, 38, 42]",
      "[16, 23, 37, 39, 42, 43]",
      "[5, 11, 14, 21, 25, 42]",
      "[3, 9, 18, 29, 34, 41]",
      "[1, 17, 22, 28, 29, 38]",
      "[6, 8, 26, 29, 33, 35]",
      "[4, 5, 7, 27, 41, 44]",
      "[4, 15, 17, 22, 34, 36]",
      "[2, 10, 15, 31, 37, 39]",
      "[4, 5, 26, 27, 29, 35]",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 550.0%입니다.",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("예외 테스트", async () => {
    await runException("10a0b0");
  });

  test("예외 테스트2", async () => {
    await runException("   100");
  });
});
