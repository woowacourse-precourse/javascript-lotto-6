import { Console } from "@woowacourse/mission-utils";
import InputView from "../../src/Views/InputView";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("InputView 클래스 테스트", () => {
  test("로또 당첨 번호 입력 받기", async () => {
    mockQuestions(["1, 2, 3, 4, 5, 6, "]);

    const numbers = await InputView.promptForDrawnLottoNumbers();

    expect(numbers).toEqual(["1", "2", "3", "4", "5", "6"]);
  });

  test("로또 보너스 번호 입력 받기", async () => {
    mockQuestions(["1 "]);

    const numbers = await InputView.promptForBonusNumber();

    expect(numbers).toBe("1");
  });
});
