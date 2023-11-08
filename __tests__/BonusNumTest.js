import BonusNum from "../src/BonusNumValidator.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
  
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};
  
describe("보너스 번호 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  })
  test("보너스 번호가 양의 정수가 아니면 예외가 발생한다.", async () => {
    const logSpy = getLogSpy();
    mockQuestions(['hi', '7']);
    const bonusNumValidator = new BonusNum([1, 2, 3, 4, 5, 6]);
    await bonusNumValidator.getBonusNum();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("보너스 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.", async () => {
    const logSpy = getLogSpy();
    mockQuestions(['46', '7']);
    const bonusNumValidator = new BonusNum([1, 2, 3, 4, 5, 6]);
    await bonusNumValidator.getBonusNum();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", async () => {
    const logSpy = getLogSpy();
    mockQuestions(['4', '7']);
    const bonusNumValidator = new BonusNum([1, 2, 3, 4, 5, 6]);
    await bonusNumValidator.getBonusNum();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
});
