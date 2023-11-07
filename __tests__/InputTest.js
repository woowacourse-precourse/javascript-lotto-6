
import { MissionUtils } from '@woowacourse/mission-utils';
import App from "../src/App.js";

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

describe("사용자 입력 테스트", () => {
  test("사용자가 입력한 금액이 1000으로 떨어지지 않으면 예외가 발생한다.", async () => {
    // given
    mockQuestions(["8111"]);
    const logSpy = getLogSpy();

    // when
    const app = new App();

    expect(async () => {
      await app.getUserMoney();
    }).toThrow("[ERROR] 잘못된 금액");

    expect(logSpy).toHaveBeenCalledWith("구입금액을 입력해 주세요.");
  });

  test("사용자가 입력한 보너스 번호가 숫자가 아니면 예외가 발생한다.", async () => {
    // given
    mockQuestions(["a"]);
    const logSpy = getLogSpy();

    // when
    const app = new App();

    expect(async () => {
      await app.getUserMoney();
    }).toThrow("[ERROR] 잘못된 보너스 번호");

    expect(logSpy).toHaveBeenCalledWith("보너스 번호를 입력해 주세요.");
  });

  test("사용자가 입력한 보너스 번호가 1~45 사이의 숫자가 아니면 예외가 발생한다.", async () => {
    // given
    mockQuestions(["46"]);
    const logSpy = getLogSpy();

    // when
    const app = new App();

    expect(async () => {
      await app.getUserMoney();
    }).toThrow("[ERROR] 잘못된 보너스 번호");

    expect(logSpy).toHaveBeenCalledWith("보너스 번호를 입력해 주세요.");
  });

});
  