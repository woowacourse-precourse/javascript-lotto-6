import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App";

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

describe("Game Start Logic Test", () => {
  test("로또 금액을 입력했을 때 해당 금액이 숫자인지 확인", async () => {
    //given
    const logSpy = getLogSpy();
    const inputs = ["hello", "1000", "1,2,3,4,5,6", "7"];

    mockQuestions(inputs);

    // when
    const app = new App();
    await app.play();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("로또 금액을 입력했을 때 해당 금액이 자연수 인지 확인", async () => {
    //given
    const logSpy = getLogSpy();
    const inputs = ["110.1", "1000", "1,2,3,4,5,6", "7"];

    mockQuestions(inputs);

    // when
    const app = new App();
    await app.play();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("로또 금액을 입력했을 때 해당 금액이 1000으로 나눠떨어지는 지 확인", async () => {
    //given
    const logSpy = getLogSpy();
    const inputs = ["5500", "1000", "1,2,3,4,5,6", "7"];

    mockQuestions(inputs);

    // when
    const app = new App();
    await app.play();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
});
