import InputView from "../src/views/InputView.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "../src/constants.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe("InputView 클래스 테스트", () => {
  test("당첨 번호를 입력 받아 Number로 이루어진 배열로 반환한다.", async () => {
    const input = "1, 2, 3, 4, 5, 6";
    mockQuestions([input]);
    const result = input.split(", ").map(Number);
    const inputView = new InputView();

    const userInput = await inputView.getWinningNumUserInput();

    expect(userInput).toEqual(result);
  });
});
