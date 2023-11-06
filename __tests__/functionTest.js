import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import setCashData from "./../src/util/setCashData";
import setLottos from "./../src/util/setLottos";
import setBonusNumber from "./../src/util/setBonusNumber";
import calculateResult from "./../src/util/calculateResult";
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

describe("메소드 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("setCashData 테스트", async () => {
    // given
    const logSpy = getLogSpy();
    mockQuestions(["8000"]);

    // when
    await setCashData();

    // then
    const log = "8개를 구매했습니다.";
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });

  test("setLottos 테스트", async () => {
    // given
    const logSpy = getLogSpy();
    mockRandoms([[8, 21, 23, 41, 42, 43]]);
    // when
    await setLottos(1000);

    // then
    const log = "[8, 21, 23, 41, 42, 43]";
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });

  test("setPrizeNumber 테스트", async () => {
    // given
    const logSpy = getLogSpy();
    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    // when
    await setLottos(1000);

    // then
  });

  test("setBonusNumber 테스트", async () => {
    // given
    const logSpy = getLogSpy();
    mockQuestions([7]);
    // when
    await setBonusNumber(["1", "2", "3", "4", "5", "6"]);

    // then
  });

  test("calculateResult 테스트", async () => {
    // given
    const logSpy = getLogSpy();
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const prizeNumberArr = ["1", "2", "3", "4", "5", "6"];
    const bonusNumber = 7;
    // when
    await calculateResult(lotto, prizeNumberArr, bonusNumber);
    // then
  });
});
