import { InputGetter } from "../src/InputGetter";
import { Console } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe("입력 가져오기", () => {
  test("금액", async () => {
    const inputs = ["1000", "2000", "3000", "13000"];
    const outputs = ["1000", "2000", "3000", "13000"];

    mockQuestions(inputs);

    const inputGetter = new InputGetter();

    outputs.forEach(async (output) => {
      const result = await inputGetter.inputMoney();

      expect(result).toBe(output);
    });
  });
});
