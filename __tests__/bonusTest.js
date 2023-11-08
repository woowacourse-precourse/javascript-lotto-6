import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import checkBonus from "../domain/Bonus.js";

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
  const INPUT_NUMBERS_TO_END = ["1,2,3,4,5,6", "7"];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

  // when
  const app = new App();
  await app.play();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
}

describe("추가 테스트", () => {
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
      [3, 5, 7, 22, 35, 45]
    ]);
    mockQuestions(["9000", "3,5,22,24,35,45", "7"]);

    // when
    const app = new App();
    await app.play();

    // then
    const logs = [
      "9개를 구매했습니다.",
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[7, 11, 16, 35, 36, 44]",
      "[1, 8, 11, 31, 41, 42]",
      "[13, 14, 16, 38, 42, 45]",
      "[7, 11, 30, 40, 42, 43]",
      "[2, 13, 22, 32, 38, 45]",
      "[1, 3, 5, 14, 22, 45]",
      "[3, 5, 7, 22, 35, 45]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 1개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 350555.6%입니다."
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
  test("보너스 숫자와 당첨번호에서 중복이 있으면 예외가 발생한다.", async () => {
    await runException("5");
  });
  test("로또 번호와 보너스 번호에 46이상의 숫자가 있으면 예외가 발생한다",()=>{
    expect(()=>{
      new checkBonus([1, 2, 3, 4, 5, 55, 66])
    }).toThrow("[ERROR]");
  });
  test("로또 번호와 보너스 번호에 정수가 아닌 숫자가 있으면 예외가 발생한다",()=>{
    expect(()=>{
      new checkBonus([1, 2, 3, 4.5, 7.8, 9, 10])
    }).toThrow("[ERROR]");
  });
  test("로또 번호와 보너스 번호에 1보다 작은 숫자가 있으면 예외가 발생한다",()=>{
    expect(()=>{
      new checkBonus([-1, 2, 4, 6, 7, 8, 10])
    }).toThrow("[ERROR]");
  });
});


