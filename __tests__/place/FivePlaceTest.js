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

  test("5등 테스트", async () => {
    //given
    const logSpy = getLogSpy();
    mockRandoms([
      [2, 3, 4, 9, 24, 26],
      [8, 14, 19, 22, 32, 44],
      [15, 16, 33, 34, 37, 42],
      [2, 9, 13, 30, 34, 35],
      [21, 27, 28, 35, 41, 45],
    ]);
    mockQuestions(["5000", "1,2,3,4,5,6", "7"]);
    
    // when
    const app = new App();
    await app.play();

    const logs = [
      "5개를 구매했습니다.",
      "[2, 3, 4, 9, 24, 26]",
      "[8, 14, 19, 22, 32, 44]",
      "[15, 16, 33, 34, 37, 42]",
      "[2, 9, 13, 30, 34, 35]",
      "[21, 27, 28, 35, 41, 45]",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 100.0%입니다.",
    ];
    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
