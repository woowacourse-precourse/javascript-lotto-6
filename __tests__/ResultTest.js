import { MissionUtils } from "@woowacourse/mission-utils";
import GameModel from "../src/LottoGame/GameModel.js";
import App from "../src/App.js";

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

describe("결과 저장 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("RESULT 확인", async () => {
    const logSpy = getLogSpy();

    mockRandoms([[1, 2, 3, 4, 5, 6]]);
    mockQuestions(["1000", "1,2,3,4,5,6", "7"]);

    const message = ["6개 일치 (2,000,000,000원) - 1개", "총 수익률은 200000000.0%입니다."];
    // when
    const app = new App();
    const model = new GameModel();
    await app.play();

    // then
    message.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
