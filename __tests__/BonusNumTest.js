import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../src/Lotto.js";

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

describe("getInputBonusNum() 테스트", () => {
  test("문자열 '7' 입력 시 7 숫자로 변환", async () => {
    mockQuestions(["7"]);
    const app = new App();
    const input = await app.getInputBonusNum();
    expect(input).toBe(7);
  });
});

describe("wrongFormmat() 테스트", () => {
  test("1~45 범위를 벗어나는 숫자 입력 시 예외 발생", () => {
    const app = new App();
    const inputs = [0, 46];

    inputs.forEach((input) => {
      expect(() => app.wrongFormmat(input)).toThrow("[ERROR]");
    });
  });

  test("실수 또는 음수 입력 시 예외 발생", () => {
    const app = new App();
    const inputs = ["a", 1.1];

    inputs.forEach((input) => {
      expect(() => app.wrongFormmat(input)).toThrow("[ERROR]");
    });
  });
});

describe("checkInOrigin() 테스트", () => {
  test("당첨번호에 존재하는 숫자 입력 시 예외 발생", () => {
    const app = new App();
    const input = 1;
    app.winningNum = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(() => app.checkInOrigin(input)).toThrow("[ERROR]");
  });
});

describe("inputBonusNum() 테스트", () => {
  test("정상입력", async () => {
    mockQuestions(["7"]);
    const app = new App();
    app.winningNum = new Lotto([1, 2, 3, 4, 5, 6]);
    await app.inputBonusNum();

    expect(app.bonusNum).toEqual(7);
  });
  test("범위를 벗어난 값이 입력된 경우 다시 입력", async () => {
    mockQuestions(["46", "0", "7"]);
    const logSpy = getLogSpy();
    const app = new App();
    app.winningNum = new Lotto([1, 2, 3, 4, 5, 6]);
    await app.inputBonusNum();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    expect(app.bonusNum).toEqual(7);
  });
  test("당천 번호의 값과 중복된 값이 입력된 경우 다시 입력", async () => {
    mockQuestions(["1", "2", "7"]);
    const logSpy = getLogSpy();
    const app = new App();
    app.winningNum = new Lotto([1, 2, 3, 4, 5, 6]);
    await app.inputBonusNum();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    expect(app.bonusNum).toEqual(7);
  });
});
