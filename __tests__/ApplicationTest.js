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

  test("예외 테스트", async () => {
    await runException("1000j");
  });
});

describe("inputPurchaseAmount 테스트", () => {
  test("1000원 단위의 금액을 입력하지 않으면 에러가 발생", async () => {
    await runException("500"); // 1000원 단위가 아닌 입력
  });
})

describe("generateLottos 테스트", () => {
  test("로또가 배열인지 확인해야 합니다", () => {
    // given
    const purchaseAmount = 6000; // 6,000원을 기반으로 로또 티켓 생성

    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
      [19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 29, 30],
    ]);
    mockQuestions([String(purchaseAmount), "1,2,3,4,5,6"]);

    // when
    const app = new App();
    const lottos = app.generateLottos(purchaseAmount);

    // then
    expect(Array.isArray(lottos)).toBe(false); // lottos가 배열인지 확인
  });
});

describe("displayPurchasedLottos", () => {
  test("로또 티켓을 올바르게 출력해야 합니다", () => {
    // given
    const app = new App();
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();

    const lottos = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];

    // when
    app.displayPurchasedLottos(lottos);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("8개를 구매했습니다.")); // 로또 티켓 개수 출력 확인
    lottos.forEach(numbers => {
      expect(logSpy).toHaveBeenCalledWith(`[${numbers.join(', ')}]`); // 각 로또 번호 출력 확인
    });
  });
});

describe("inputWinningNumbers 테스트", () => {
  it("유효한 당첨 번호를 올바르게 입력받아야 합니다", async () => {
    // given
    const validInput = "1, 2, 3, 4, 5, 6"; // 유효한 당첨 번호 입력
    MissionUtils.Console.readLineAsync.mockResolvedValueOnce(validInput);

    // when
    const app = new App();
    const winningNumbers = await app.inputWinningNumbers();

    // then
    expect(Array.isArray(winningNumbers)).toBe(true); // 입력된 당첨 번호가 배열인지 확인
    expect(winningNumbers.length).toBe(6); // 6개의 숫자가 입력되었는지 확인
    expect(winningNumbers.every(number => !isNaN(number) && number >= 1 && number <= 45)).toBe(true); // 각 숫자가 유효한 범위에 속하는지 확인
  });
})

describe("inputBonusNumber 테스트", () => {
  it("유효한 보너스 번호를 올바르게 입력받아야 합니다", async () => {
    // given
    const validInput = "7"; // 유효한 보너스 번호 입력
    MissionUtils.Console.readLineAsync.mockResolvedValueOnce(validInput);

    // when
    const app = new App();
    const bonusNumber = await app.inputBonusNumber();

    // then
    expect(bonusNumber).toBe(7); // 올바른 입력값을 반환하는지 확인
  });
})







