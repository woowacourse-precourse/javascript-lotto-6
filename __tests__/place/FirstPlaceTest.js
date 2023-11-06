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

  test("1등 테스트", async () => {
    //given
    const logSpy = getLogSpy();
    mockRandoms([
      [1, 2, 13, 16, 28, 43],
      [5, 13, 16, 17, 28, 43],
      [1, 4, 10, 19, 38, 40],
      [2, 8, 16, 18, 33, 42],
      [1, 7, 16, 17, 40, 45],
    ]);
    mockQuestions(["5000", "2,8,16,18,33,42", "6"]);
    
    // when
    const app = new App();
    await app.play();

    const logs = [
      "5개를 구매했습니다.",
      "[1, 2, 13, 16, 28, 43]",
      "[5, 13, 16, 17, 28, 43]",
      "[1, 4, 10, 19, 38, 40]",
      "[2, 8, 16, 18, 33, 42]",
      "[1, 7, 16, 17, 40, 45]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 1개",
      "총 수익률은 400000000.0%입니다.",
    ];
    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
