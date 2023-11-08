import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import MESSAGE from "../src/constants/message.js";
import publishService from "../src/services/publishService.js";

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

const runExceptionByWinningNumInput = async (inputs) => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_START = "1000";
  const INPUT_NUMBERS_TO_END = ["1,2,3,4,5,6", "7"];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([INPUT_NUMBERS_TO_START, ...inputs, ...INPUT_NUMBERS_TO_END]);

  // when
  const app = new App();
  await app.play();

  // then
  expect(logSpy).toHaveBeenCalledWith(
    expect.stringContaining(MESSAGE.error.notLength)
  );
  expect(logSpy).toHaveBeenCalledWith(
    expect.stringContaining(MESSAGE.error.notComma)
  );
  expect(logSpy).toHaveBeenCalledWith(
    expect.stringContaining(MESSAGE.error.notRange)
  );
  expect(logSpy).toHaveBeenCalledWith(
    expect.stringContaining(MESSAGE.error.repeatNum)
  );
  expect(logSpy).toHaveBeenCalledTimes(9);
};

const runExceptionByBonusNumInput = async (input) => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_START = ["1000", "1,2,3,4,5,6"];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([...INPUT_NUMBERS_TO_START, ...input]);

  // when
  const app = new App();
  await app.play();

  // then
  expect(logSpy).toHaveBeenCalledWith(
    expect.stringContaining(MESSAGE.error.notBonusRange)
  );
  expect(logSpy).toHaveBeenCalledWith(
    expect.stringContaining(MESSAGE.error.repeatBonusNum)
  );
  expect(logSpy).toHaveBeenCalledTimes(7);
};

describe("로또 발행 테스트", () => {
  test("구입 금액에 따른 로또 수량 검증", () => {
    // given
    const price = 8000;

    // when
    const result = publishService.calculateAmount(price);

    // then
    expect(result).toBe(8);
  });

  test("로또 당첨 번호 입력 시 입력값 검증", async () => {
    const input = ["1,2,3", "1245", "1,1,2,3,4,5", "1-3,2,5,6,-2,1"];
    await runExceptionByWinningNumInput(input);
  });

  test("보너스 번호 입력 시 입력값 검증", async () => {
    const input = ["48", "1"];
    await runExceptionByBonusNumInput(input);
  });
});
