import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../src/Lotto.js";

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

  test("사용자가 로또 구입 시 로또 번호 발행", async () => {
    const lottoAmount = 2;
    const purchaseAmount = 2000;

    const app = new App();

    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ]);

    const lottos = app.createLottos(purchaseAmount);
    expect(lottos).toHaveLength(lottoAmount);
    expect(lottos[0].getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    expect(lottos[1].getNumbers()).toEqual([7, 8, 9, 10, 11, 12]);
  });

  test("당첨 번호와 보너스 번호 입력", async () => {
    const winningNumbers = "1,2,3,4,5,6";
    const bounsNumber = "7";

    const app = new App();

    expect(app.validateLottoNumbers(winningNumbers)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
    expect(app.validateBonusNumber(bounsNumber, winningNumbers)).toBe(7);
  });

  test("당첨 결과 계산: 6자리 다 맞출 경우", () => {
    const userNumbers = [new Lotto([1, 2, 3, 4, 5, 6])];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const app = new App();

    const results = app.winningLotto(userNumbers, winningNumbers, bonusNumber);

    expect(results).toEqual({
      fifth: 0,
      fourth: 0,
      third: 0,
      second: 0,
      first: 1,
    });
  });

  test("당첨 결과 계산: 수익률", () => {
    const userMoney = 1000;
    const results = { fifth: 0, fourth: 0, third: 0, second: 0, first: 1 };
    const app = new App();

    const profit = app.calculateProfit(userMoney, results);

    const expectedProfitRate =
      Math.round((2000000000 / userMoney) * 100 * 10) / 10;

    expect(profit).toBeCloseTo(expectedProfitRate, 1);
  });
});
