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

describe("구매 금액 예외 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("유효하지 않은 구매금액 테스트", async () => {
    const logSpy = getLogSpy();

    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    mockQuestions(["1200", "1000", "1,2,3,4,5,6", "7"]);
    // when
    const app = new App();
    await app.play();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("[ERROR] 구매금액을 천원 단위로 입력해 주세요.")
    );
  });

  test("유효하지 않은 구매금액 타입 테스트", async () => {
    const logSpy = getLogSpy();

    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    mockQuestions(["1200ㅂ", "1000", "1,2,3,4,5,6", "7"]);
    // when
    const app = new App();
    await app.play();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("[ERROR] 구매금액은 숫자만 입력이 가능합니다.")
    );
  });
});
