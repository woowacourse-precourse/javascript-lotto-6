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

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_END = ["1000", input, "1,2,3,4,5,6", "7"];

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

  test("당첨 번호의 개수가 6개가 넘어가면 예외가 발생한다. ", async () => {
    await runException("1,2,3,4,5,6,7");
  });
  test("당첨 번호에 중복된 숫자가 있으면 예외가 발생한다. ", async () => {
    await runException("1,2,3,4,5,5");
  });
  test("로또 번호의 범위가 1~45가 아니라면 예외가 발생한다. ", async () => {
    await runException("-1,2,3,4,5,47");
  });
  test("당첨 번호 중 숫자가 아닌 문자가 있으면 예외가 발생한다.", async () => {
    await runException("1,2,3,4,5,6,test");
  });
});
