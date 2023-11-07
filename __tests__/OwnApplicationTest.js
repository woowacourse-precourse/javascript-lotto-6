import App from "../src/App";
import { MODE } from "../src/constants/mode";
import { Console } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe("어플리케이션 테스트", () => {
  test("올바른 값을 입력할 때 까지 반복", async () => {
    const app = new App();
    const mode = MODE.MONEY;
    const result = 1000;
    const inputs = ["100", "", "1500", "1000"];
    let value = null;

    mockQuestions(inputs);

    value = await app.untilValueAvailable(value, mode);

    expect(value).toEqual(result);
  });
});
