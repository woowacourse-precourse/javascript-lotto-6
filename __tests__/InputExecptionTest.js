import inputValidators from "../src/input/inputValidators.js";

describe("구입 금액에 대한 예외처리", () => {
  test.each([["천원"], ["1million"], ["1000j"]])(
    "구입 금액은 숫자여야 한다.",
    async (input) => {
      expect(() => {
        inputValidators.validatePayment(input);
      }).toThrow("[ERROR]");
    }
  );

  test.each([[1001], [500], [1000.21]])(
    "구입 금액은 1,000원 단위여야 한다.",
    async (input) => {
      expect(() => {
        inputValidators.validatePayment(input);
      }).toThrow("[ERROR]");
    }
  );

  test.each([[0]])(
    "구입 금액은 0원이거나 0으로 시작하지 않는다.",
    async (input) => {
      expect(() => {
        inputValidators.validatePayment(input);
      }).toThrow("[ERROR]");
    }
  );
});

describe("당첨 번호에 대한 예외처리", () => {
  test.each([
    [1.2, 3, 4, 5, 6],
    [30, 23],
  ])("당첨 번호는 쉼표로 구분하며, 6개의 번호여야 한다.", async (input) => {
    expect(() => {
      inputValidators.validateWinningNumbers(input);
    }).toThrow("[ERROR]");
  });

  test.each([
    [25, 100, 1, 4, 2, 6],
    [1.2, 3, 4, 5, 6, 7],
  ])("당첨 번호는 1-45 사이의 정수여야 한다.", async (input) => {
    expect(() => {
      inputValidators.validateWinningNumbers(input);
    }).toThrow("[ERROR]");
  });

  test.each([[5, 7, 20, 4, 5, 32]])(
    "당첨 번호는 서로 중복되면 안된다.",
    async (input) => {
      expect(() => {
        inputValidators.validateWinningNumbers(input);
      }).toThrow("[ERROR]");
    }
  );
});

describe("보너스 번호에 대한 예외처리", () => {
  test.each([
    [0, [2, 3, 4, 5, 6, 7]],
    ["일", [1, 2, 3, 4, 5, 6]],
  ])("보너스 번호는 1-45 사이의 숫자여야 한다.", async (input1, input2) => {
    expect(() => {
      inputValidators.validateBonusNumber(input1, input2);
    }).toThrow("[ERROR]");
  });

  test.each([
    [1, [1, 2, 3, 4, 5, 6]],
    [12, [1, 4, 2, 6, 5, 12]],
  ])("보너스 번호는 당첨 번호와 중복되면 안된다.", async (input1, input2) => {
    expect(() => {
      inputValidators.validateBonusNumber(input1, input2);
    }).toThrow("[ERROR]");
  });
});
