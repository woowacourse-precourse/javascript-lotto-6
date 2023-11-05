import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import LottoGame from "../src/LottoGame.js";
import Lotto from "../src/Lotto.js";
import Validation from "../src/Validation.js";
import UserInterface from "../src/UserInterface.js";

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
    await expect(runException("1000j")).rejects.toThrow("[ERROR]");
  });

  test("구입금액 0일 경우 예외 테스트", async () => {
    mockQuestions(["0"]);
    await expect(UserInterface.getLottoPrice()).rejects.toThrow("[ERROR]");
  });

  test("구입금액 1,000원 단위가 아닐경우 예외 테스트", async () => {
    mockQuestions(["1100"]);
    await expect(UserInterface.getLottoPrice()).rejects.toThrow("[ERROR]");
  });

  test("로또 번호 생성 테스트", async () => {
    const count = 3;
    const mockNumbers = [
      [5, 10, 15, 20, 25, 30],
      [1, 2, 3, 4, 5, 6],
      [6, 7, 8, 9, 10, 11],
    ];
    MissionUtils.Random.pickUniqueNumbersInRange = jest
      .fn()
      .mockReturnValueOnce(mockNumbers[0])
      .mockReturnValueOnce(mockNumbers[1])
      .mockReturnValueOnce(mockNumbers[2]);

    const lottos = LottoGame.generateLottos(count);
    expect(lottos.length).toBe(count);

    lottos.forEach((lotto, idx) => {
      expect(lotto.getNumbers()).toEqual(mockNumbers[idx]);
    });
  });

  test("당첨 번호 예외 테스트", async () => {
    const mockInput = jest.spyOn(MissionUtils.Console, "readLineAsync");
    mockInput.mockResolvedValueOnce("1,2,3,4,5,6,7");

    await expect(() => UserInterface.getWinningNumbers()).rejects.toThrow("[ERROR]");
  });

  test("보너스 번호 예외 테스트", async () => {
    const mockInput = jest.spyOn(MissionUtils.Console, "readLineAsync");
    mockInput.mockResolvedValueOnce("1,2,3,4,5,6").mockResolvedValueOnce("1");

    const winningNumbers = await UserInterface.getWinningNumbers();
    await expect(() => UserInterface.getBonusNumber(winningNumbers)).rejects.toThrow("[ERROR]");
  });

  test("로또 번호 매칭 로직 테스트", async () => {
    const lottos = [new Lotto([1, 3, 5, 7, 9, 11]), new Lotto([1, 2, 3, 4, 5, 6])];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const result = LottoGame.calculateResult(lottos, winningNumbers, bonusNumber);
    expect(result).toEqual({ 3: 1, 4: 0, 5: 0, "5+1": 0, 6: 1 });
  });

  test("로또 수익률 계산 테스트", async () => {
    const result = { 3: 1, 4: 1, 5: 0, "5+1": 0, 6: 0 };
    const lottoPrice = 2000;
    const profit = UserInterface.displayResult(result, lottoPrice);
    expect(profit.toFixed(1)).toEqual("2750.0");
  });
});
