import App from "../src/App.js";
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

describe("getInputCost() 테스트", () => {
  test("문자열 '3000' 입력 시 3000 숫자로 변환", async () => {
    mockQuestions(["3000"]);
    const app = new App();
    const inputCost = await app.getInputCost();
    expect(inputCost).toBe(3000);
  });
});

describe("costValid() 테스트", () => {
  test("1000으로 나누어 떨어지지 않는 숫자 입력 시 예외 발생", () => {
    const app = new App();
    const inputCost = "2500";
    expect(() => app.costValid(inputCost)).toThrow("[ERROR]");
  });

  test("음수 입력 시 예외 발생", () => {
    const app = new App();
    const inputCost = "-1000";
    expect(() => app.costValid(inputCost)).toThrow("[ERROR]");
  });

  test("실수 입력 시 예외 발생", () => {
    const app = new App();
    const inputCost = "1000.1";
    expect(() => app.costValid(inputCost)).toThrow("[ERROR]");
  });
});

describe("inputCost() 테스트", () => {
  test("정상입력", async () => {
    mockQuestions(["3000"]);
    const app = new App();
    await app.inputCost();

    expect(app.cost).toEqual(3000);
  });

  test("값이 1000으로 나누어지지 않는 경우 다시 입력", async () => {
    mockQuestions(["3500", "3000"]);
    const logSpy = getLogSpy();

    const app = new App();
    await app.inputCost();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    expect(app.cost).toEqual(3000);
  });
  test("값이 숫자가 아닌 경우 다시 입력", async () => {
    mockQuestions(["정환", "3000"]);
    const logSpy = getLogSpy();

    const app = new App();
    await app.inputCost();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    expect(app.cost).toEqual(3000);
  });
});
