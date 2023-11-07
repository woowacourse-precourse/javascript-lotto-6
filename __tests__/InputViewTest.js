import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "../src/view/InputView";

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

describe("InputView 클래스 테스트", () => {
  const inputView = new InputView();
  test("구입 메세지 출력 테스트", () => {
    const logSpy = getLogSpy();

    mockQuestions(["1000"]);

    inputView.inputPurchase();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("구입금액을 입력해 주세요."));
  });

  test("당첨 번호 입력 메세지 출력 테스트", () => {
    const logSpy = getLogSpy();

    mockQuestions(["1, 2, 3, 4, 5, 6"]);

    inputView.inputWinningNumber();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("당첨 번호를 입력해주세요."));
  });

  test("보너스 번호 입력 메세지 출력 테스트", () => {
    const logSpy = getLogSpy();

    mockQuestions(["1"]);

    inputView.inputBonusNumber();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("보너스 번호를 입력해주세요."));
  });
});
