import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import MESSAGE from "../src/constants/message.js";

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

const runExceptionByPurchaseInput = async (inputs) => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "7"];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([...inputs, ...INPUT_NUMBERS_TO_END]);

  // when
  const app = new App();
  await app.play();

  // then
  expect(logSpy).toHaveBeenCalledWith(
    expect.stringContaining(MESSAGE.error.priceUnit)
  );
  expect(logSpy).toHaveBeenCalledWith(
    expect.stringContaining(MESSAGE.error.notNumber)
  );
  expect(logSpy).toHaveBeenCalledTimes(8);
};

describe("로또 구입 테스트", () => {
  test("구입 금액 입력 시 입력값 검증", async () => {
    const input = ["천 원", "1000j", "1202"];
    await runExceptionByPurchaseInput(input);
  });
});
