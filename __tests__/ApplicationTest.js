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

describe("로또 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe("기능 테스트", () => {
    test("실행 결과 테스트", async () => {
      // given
      const logSpy = getLogSpy();

      mockRandoms([
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ]);
      mockQuestions(["8000", "1,2,3,4,5,6", "7"]);

      // when
      const app = new App();
      await app.play();

      // then
      const logs = [
        "8개를 구매했습니다.",
        "[8, 21, 23, 41, 42, 43]",
        "[3, 5, 11, 16, 32, 38]",
        "[7, 11, 16, 35, 36, 44]",
        "[1, 8, 11, 31, 41, 42]",
        "[13, 14, 16, 38, 42, 45]",
        "[7, 11, 30, 40, 42, 43]",
        "[2, 13, 22, 32, 38, 45]",
        "[1, 3, 5, 14, 22, 45]",
        "3개 일치 (5,000원) - 1개",
        "4개 일치 (50,000원) - 0개",
        "5개 일치 (1,500,000원) - 0개",
        "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
        "6개 일치 (2,000,000,000원) - 0개",
        "총 수익률은 62.5%입니다.",
      ];

      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });

    test("수익률 소수점 출력 확인", async () => {
      // given
      const logSpy = getLogSpy();

      mockRandoms([[8, 21, 23, 41, 42, 43]]);
      mockQuestions(["1000", "8,21,23,41,42,43", "7"]);

      // when
      const app = new App();
      await app.play();

      // then
      const logs = [
        "3개 일치 (5,000원) - 0개",
        "4개 일치 (50,000원) - 0개",
        "5개 일치 (1,500,000원) - 0개",
        "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
        "6개 일치 (2,000,000,000원) - 1개",
        "총 수익률은 200000000.0%입니다.",
      ];

      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });

    test("보너스 번호 적용 확인", async () => {
      // given
      const logSpy = getLogSpy();

      mockRandoms([[7, 21, 23, 41, 42, 43]]);
      mockQuestions(["1000", "8,21,23,41,42,43", "7"]);

      // when
      const app = new App();
      await app.play();

      // then
      const logs = [
        "3개 일치 (5,000원) - 0개",
        "4개 일치 (50,000원) - 0개",
        "5개 일치 (1,500,000원) - 0개",
        "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
        "6개 일치 (2,000,000,000원) - 0개",
        "총 수익률은 3000000.0%입니다.",
      ];

      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });

    test("여러 개 당첨 시 결과 확인", async () => {
      // given
      const logSpy = getLogSpy();

      mockRandoms([
        [8, 21, 23, 41, 42, 43],
        [7, 21, 23, 41, 42, 43],
      ]);
      mockQuestions(["2000", "8,21,23,41,42,43", "7"]);

      // when
      const app = new App();
      await app.play();

      // then
      const logs = [
        "3개 일치 (5,000원) - 0개",
        "4개 일치 (50,000원) - 0개",
        "5개 일치 (1,500,000원) - 0개",
        "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
        "6개 일치 (2,000,000,000원) - 1개",
        "총 수익률은 101500000.0%입니다.",
      ];

      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });
  });

  const runMoneyException = async (input) => {
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

  const runChoiceException = async (input) => {
    // given
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS = ["1000", input, "1,2,3,4,5,6", "7"];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS);

    // when
    const app = new App();
    await app.play();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  };

  const runBonusException = async (input) => {
    // given
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS = ["1000", "1,2,3,4,5,6", input, "7"];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    // when
    const app = new App();
    await app.play();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  };

  describe("예외 테스트", () => {
    test.each([["1000j", "1500"]])("금액 입력 테스트", async (input) => {
      await runMoneyException(input);
    });

    test.each([["1,2,3,4,5", "1,2,3,4,5,66", "1,2,3,사,오,6"]])(
      "당첨 번호 입력 테스트",
      async (input) => {
        await runChoiceException(input);
      }
    );

    test.each([["1", "0", "사", "1jd"]])(
      "당첨 번호 입력 테스트",
      async (input) => {
        await runChoiceException(input);
      }
    );
  });
});
