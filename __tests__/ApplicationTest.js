import App from "../src/App.js";
import { mockQuestions, mockRandoms, getLogSpy } from "../test-utils.js";

const runException = async (inputs, randomNumbers) => {
  // given
  const logSpy = getLogSpy();

  const questionMock = inputs.flatMap((input) =>
    input.fallback == undefined ? [input.value] : [input.value, input.fallback],
  );

  mockRandoms([randomNumbers]);
  mockQuestions(questionMock);

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

  describe("사용자 인풋 예외 테스트", () => {
    const DEFAULT_RANDOM_NUMBERS = [1, 2, 3, 4, 5, 6];

    test("구입금액 예외 발생시 에러를 발생시키고 다시 구입금액을 물어본다.", async () => {
      await runException(
        [
          { value: "1000j", fallback: "1000" },
          { value: "1,2,3,4,5,6" },
          { value: "7" },
        ],
        DEFAULT_RANDOM_NUMBERS,
      );
    });

    test("당첨번호 입력 예외 발생시 에러를 발생시키고 다시 당첨번호를 물어본다.", async () => {
      await runException(
        [
          { value: "1000" },
          { value: "a,b,c,d,e,f", fallback: "1,2,3,4,5,6" },
          { value: "7" },
        ],
        DEFAULT_RANDOM_NUMBERS,
      );
    });

    test("보너스 번호 입력 예외 발생시 에러를 발생시키고 다시 보너스 번호를 물어본다.", async () => {
      await runException(
        [
          { value: "1000" },
          { value: "1,2,3,4,5,6" },
          { value: "100", fallback: "7" },
        ],
        DEFAULT_RANDOM_NUMBERS,
      );
    });
  });
});
