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

describe("getInputWinnerNum() 테스트", () => {
  test("문자열 '1,2,3,4,5,6' 입력 시 [1,2,3,4,5,6] 숫자 배열로 변환", async () => {
    mockQuestions(["1,2,3,4,5,6"]);
    const app = new App();
    const input = await app.getInputWinnerNum();
    expect(input).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6]));
  });
});

describe("inputWinnerNum() 테스트", () => {
  test("정상입력", async () => {
    mockQuestions(["1,2,3,4,5,6"]);
    const app = new App();
    await app.inputWinnerNum();

    expect(app.winningNum.getNumbers()).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6]));
  });

  test("당첨 번호 중의 개수가 6개가 넘어가면 다시 입력", async () => {
    mockQuestions(["1,2,3,4,5,6,7", "1,2,3,4,5,6"]);
    const logSpy = getLogSpy();

    const app = new App();
    await app.inputWinnerNum();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    expect(app.winningNum.getNumbers()).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6]));
  });

  test("당첨 번호 중의 개수가 6개가 미만이면 다시 입력", async () => {
    mockQuestions(["1,2,3,4,5", "1,2,3,4,5,6"]);
    const logSpy = getLogSpy();

    const app = new App();
    await app.inputWinnerNum();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    expect(app.winningNum.getNumbers()).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6]));
  });

  test("당첨 번호 중 1~45 범위를 벗어나는 수가 있으면 다시 입력", async () => {
    mockQuestions(["1,2,3,4,5,56", "1,2,3,4,5,6"]);
    const logSpy = getLogSpy();

    const app = new App();
    await app.inputWinnerNum();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    expect(app.winningNum.getNumbers()).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6]));
  });

  test("당첨 번호 중에 숫자나 정수가 아닌 것이 있으면 다시 입력", async () => {
    mockQuestions(["1,2,3,4,5,a", "1,2,3,4,5,6"]);
    const logSpy = getLogSpy();

    const app = new App();
    await app.inputWinnerNum();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    expect(app.winningNum.getNumbers()).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6]));
  });

  test("당첨 번호 중 중복된 수가 있으면 다시 입력", async () => {
    mockQuestions(["1,2,3,4,5,5", "1,2,3,4,5,6"]);
    const logSpy = getLogSpy();

    const app = new App();
    await app.inputWinnerNum();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    expect(app.winningNum.getNumbers()).toEqual(expect.arrayContaining([1, 2, 3, 4, 5, 6]));
  });
});
