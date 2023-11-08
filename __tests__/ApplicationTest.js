import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../src/Lotto.js";
import LottoManagement from "../src/LottoManagement.js";
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

  test("구입금액이 숫자가 아닌 경우 테스트", () => {
    const app = new App();

    const invalidPurchasePrice = "abc";
    expect(() => app.checkValidationInputPrice(invalidPurchasePrice)).toThrow(
      "[ERROR] 구입금액을 올바르게 입력해 주세요."
    );
  });

  test("구입금액이 1000의 배수가 아닌 경우 테스트", () => {
    const app = new App();

    const invalidPurchasePrice = "2500";
    expect(() => app.checkValidationInputPrice(invalidPurchasePrice)).toThrow(
      "[ERROR] 구입금액을 올바르게 입력해 주세요."
    );
  });

  test("구입금액이 0 이하인 경우 테스트", () => {
    const app = new App();

    const invalidPurchasePrice = "-1000";
    expect(() => app.checkValidationInputPrice(invalidPurchasePrice)).toThrow(
      "[ERROR] 구입금액을 올바르게 입력해 주세요."
    );
  });

  test("구입금액이 정수가 아닌 경우 테스트", () => {
    const app = new App();

    const invalidPurchasePrice = "1500.5";
    expect(() => app.checkValidationInputPrice(invalidPurchasePrice)).toThrow(
      "[ERROR] 구입금액을 올바르게 입력해 주세요."
    );
  });

  test("보너스 입력 예외 테스트 1", async () => {
    // given
    const logSpy = getLogSpy();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "0", "7"];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    // when
    const app = new App();
    await app.play();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        "[ERROR] 1부터 45 사이의 숫자 한 개만 입력이 가능합니다."
      )
    );
  });

  test("보너스 입력 예외 테스트 2", async () => {
    // given
    const logSpy = getLogSpy();

    logSpy.mockClear();

    const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
    const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "1.1", "7"];

    mockRandoms([RANDOM_NUMBERS_TO_END]);
    mockQuestions(INPUT_NUMBERS_TO_END);

    // when
    const app = new App();
    await app.play();

    // then

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("[ERROR] 자연수만 입력이 가능합니다.")
    );
  });

  test("보너스 입력값이 랜덤 배열에 포함 여부 테스트", () => {
    const app = new App();
    app.bonusNumber = 20;
    const randomArrs = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 9, 10, 11, 12]),
    ];

    const result = app.countBonuses(randomArrs);

    expect(result).toEqual([0, 0]);
  });

  test("입력된 번호와 랜덤 로또 번호 간의 일치하는 번호 개수 테스트", () => {
    const lottoManagement = new LottoManagement();
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const generatedLottoNumbersArr = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [7, 8, 9, 10, 11, 12],
    ];

    const counts = lottoManagement.compareInputNumAndRandomNum(
      winningNumbers,
      generatedLottoNumbersArr
    );

    expect(counts).toEqual([6, 5, 0]);
  });

  test("일치하는 번호 개수를 기반으로 각 경우의 수 계산 테스트", () => {
    const lottoManagement = new LottoManagement();
    const counts = [3, 4, 5, 5, 6]; // 일치하는 번호 개수
    const includedbonusArr = [0, 1, 0, 1, 0]; //보너스 번호 포함 여부 (0 또는 1)

    const matchingCountsResult = lottoManagement.getMatchingCounts(
      counts,
      includedbonusArr
    );

    expect(matchingCountsResult).toEqual({
      three: 1,
      four: 1,
      five: 1,
      fiveAndBonus: 1,
      six: 1,
    });
  });
});
