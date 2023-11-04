import { InputGetter } from "../src/InputGetter";
import { InputConverter } from "../src/InputConverter";
import { InputValidator } from "../src/InputValidator";
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

  test("당첨 번호", async () => {
    const inputs = ["1,2,3,4,6,5", "1,4,22,34,45,44", "4,7,9,23,41,42"];
    const outputs = ["1,2,3,4,6,5", "1,4,22,34,45,44", "4,7,9,23,41,42"];

    mockQuestions(inputs);

    const inputGetter = new InputGetter();

    outputs.forEach(async (output) => {
      const result = await inputGetter.inputWinningNumbers();

      expect(result).toBe(output);
    });
  });

  test("보너스 번호", async () => {
    const inputs = ["1", "45", "38", "22"];
    const outputs = ["1", "45", "38", "22"];

    mockQuestions(inputs);

    const inputGetter = new InputGetter();

    outputs.forEach(async (output) => {
      const result = await inputGetter.inputBonusNumber();

      expect(result).toBe(output);
    });
  });
});

describe("입력 변환하기", () => {
  test("금액", () => {
    const inputs = ["1000", "3000", "15000"];
    const outputs = [1000, 3000, 15000];

    const inputConverter = new InputConverter();

    outputs.forEach((output) => {
      const input = inputs.shift();
      const result = inputConverter.moneyConverter(input);

      expect(result).toEqual(output);
    });
  });

  test("당첨 번호", () => {
    const inputs = ["1,2,3,4,5,6", "11,23,45,22,12,38"];
    const outputs = [
      [1, 2, 3, 4, 5, 6],
      [11, 23, 45, 22, 12, 38],
    ];

    const inputConverter = new InputConverter();

    outputs.forEach((output) => {
      const input = inputs.shift();
      const result = inputConverter.winningNumbersConverter(input);

      expect(result).toEqual(output);
    });
  });

  test("보너스 번호", () => {
    const inputs = ["1", "45", "17", "7"];
    const outputs = [1, 45, 17, 7];

    const inputConverter = new InputConverter();

    outputs.forEach((output) => {
      const input = inputs.shift();
      const result = inputConverter.bonusNumberConverter(input);

      expect(result).toEqual(output);
    });
  });
});

describe("입력 예외 처리", () => {
  test("금액", () => {
    const inputs = ["100", "1001", "-1000", " 1000", ".1000"];

    const inputValidator = new InputValidator();

    inputs.forEach((input) => {
      expect(() => {
        inputValidator.moneyValidator(input);
      }).toThrow("[ERROR]");
    });
  });

  test("당첨 번호", () => {
    const inputs = [
      "1,,2,3,4,5,6",
      "123456",
      "-1,2,3,4,5,6",
      "1,2,3,4,5",
      "0,1,2,3,4,5",
      "47,23,22,12,24,18",
      "1,1,2,3,4,5",
      "1,7,2,3,4,5,9",
      ".,1,3,4,5,6",
      "s,1,2,3,4,5",
    ];

    const inputValidator = new InputValidator();

    inputs.forEach((input) => {
      console.log(input);
      expect(() => {
        inputValidator.winningNumbersValidator(input);
      }).toThrow("[ERROR]");
    });
  });
});
