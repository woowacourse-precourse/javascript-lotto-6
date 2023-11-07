import App from "../src/App.js";
import Lotto from "../src/Lotto.js";
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

  const RANDOM_NUMBERS_TO_END = [1,2,3,4,5,6];
  const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "7"];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

  // when
  const app = new App();
  await app.play();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
}

describe("로또 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  })

  test("구매 테스트", async () => {
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
    mockQuestions(["8000"]);

    // when
    const app = new App();
    await app.buy();

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
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("로또 숫자 잘못입력 예외 확인", async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([
      [8, 21, 23, 41, 42, 43],
    ]);
    mockQuestions(["","1,2,3,4,5,a","1,2,3,4,5,5","1,2,3,4,5,94","1,2,3,4","1,2,3,4,5,6,7","1,2,3,4,5,6"]);

    // when
    const app = new App();
    await app.winLottoInput();

    // then
    const logs = [
      "[ERROR] 값을 입력해주세요.",
      "[ERROR] 숫자를 입력해주세요.",
      "[ERROR] 중복된 숫자가 존재합니다.",
      "[ERROR] 1-45사이의 숫자를 입력해주세요.",
      "[ERROR] 로또 번호는 6개여야 합니다.",
      "[ERROR] 로또 번호는 6개여야 합니다."
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("보너스번호 예외 확인", async () => {
    // given
    const logSpy = getLogSpy();

    mockQuestions(["1","a","133","7"]);

    // when
    const app = new App();
    app.winLotto = new Lotto([1,2,3,4,5,6]);
    await app.bonusInput();

    // then
    const logs = [
      "[ERROR] 중복된 숫자가 존재합니다.",
      "[ERROR] 숫자를 입력해주세요.",
      "[ERROR] 1-45사이의 숫자를 입력해주세요.",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
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

  test("기능 테스트2", async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([
      [1,2,3,4,5,6],
    ]);
    mockQuestions(["1000", "1,2,3,4,5,6", "7"]);

    // when
    const app = new App();
    await app.play();

    // then
    const logs = [
      "1개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 6]",
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

  test("기능 테스트2", async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([
      [7,8,9,10,11,12],
      [1,2,3,4,5,6],
      [1,2,3,4,5,6],
      [1,2,3,4,5,6],
      [1,2,3,4,5,6],
    ]);
    mockQuestions(["5000", "7,8,9,13,14,15", "20"]);

    // when
    const app = new App();
    await app.play();

    // then
    const logs = [
      "5개를 구매했습니다.",
      "[7, 8, 9, 10, 11, 12]",
      "[1, 2, 3, 4, 5, 6]",
      "[1, 2, 3, 4, 5, 6]",
      "[1, 2, 3, 4, 5, 6]",
      "[1, 2, 3, 4, 5, 6]",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 100.0%입니다.",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트3", async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([
      [7,8,9,10,11,12],
      [1,2,3,4,5,6],
      [1,2,3,4,5,6],
    ]);
    mockQuestions(["3000", "7,8,9,10,11,12", "20"]);

    // when
    const app = new App();
    await app.play();

    // then
    const logs = [
      "3개를 구매했습니다.",
      "[7, 8, 9, 10, 11, 12]",
      "[1, 2, 3, 4, 5, 6]",
      "[1, 2, 3, 4, 5, 6]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 1개",
      "총 수익률은 66666666.7%입니다.",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트4", async () => {
    // given
    const logSpy = getLogSpy();

    mockRandoms([
      [7,8,9,10,11,12],
      [1,2,3,4,5,6],
      [1,2,3,4,5,6],
      [1,2,3,4,5,6],
      [1,2,3,4,5,6],
      [1,2,3,4,5,6],
      [1,2,3,4,5,6],
    ]);
    mockQuestions(["7000", "7,8,9,10,11,12", "20"]);

    // when
    const app = new App();
    await app.play();

    // then
    const logs = [
      "7개를 구매했습니다.",
      "[7, 8, 9, 10, 11, 12]",
      "[1, 2, 3, 4, 5, 6]",
      "[1, 2, 3, 4, 5, 6]",
      "[1, 2, 3, 4, 5, 6]",
      "[1, 2, 3, 4, 5, 6]",
      "[1, 2, 3, 4, 5, 6]",
      "[1, 2, 3, 4, 5, 6]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 1개",
      "총 수익률은 28571428.6%입니다.",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("예외 테스트", async () => {
    await runException("1000j");
  });
});

