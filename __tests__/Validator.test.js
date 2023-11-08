import Validator from "../src/utils/Validator";

describe("purchase 검증 테스트", () => {
  test("purchase에 양수가 아닌 값이 들어오면 에러를 던진다.", () => {
    expect(() => {
      Validator.purchase(-1);
    }).toThrow("[ERROR]");
  });
  test("purchase에 0이 들어오면 에러를 던진다.", () => {
    expect(() => {
      Validator.purchase(0);
    }).toThrow("[ERROR]");
  });
  test("purchase에 1000으로 나누어 떨어지지 않는 값이 들어오면 에러를 던진다.", () => {
    expect(() => {
      Validator.purchase(1100);
    }).toThrow("[ERROR]");
  });
});

describe("winningNumbers 검증 테스트", () => {
  test("winningNumbers에 중복된 숫자가 들어오면 에러를 던진다.", () => {
    expect(() => {
      Validator.winningNumbers([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("winningNumbers에 6개의 숫자가 들어오지 않으면 에러를 던진다.", () => {
    expect(() => {
      Validator.winningNumbers([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("winningNumbers에 숫자가 아닌 값이 들어오면 에러를 던진다.", () => {
    expect(() => {
      Validator.winningNumbers([1, 2, 3, 4, 5, "a"]);
    }).toThrow("[ERROR]");
  });

  test("winningNumbers에 1~45 사이의 숫자가 아닌 값이 들어오면 에러를 던진다.", () => {
    expect(() => {
      Validator.winningNumbers([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });
});

describe("bonusNumber 검증 테스트", () => {
  test("bonusNumber에 winningNumbers에 포함된 숫자가 들어오면 에러를 던진다.", () => {
    expect(() => {
      Validator.bonusNumber([1, 2, 3, 4, 5, 6], 6);
    }).toThrow("[ERROR]");
  });
  test("bonusNumber에 숫자가 아닌 값이 들어오면 에러를 던진다.", () => {
    expect(() => {
      Validator.bonusNumber([1, 2, 3, 4, 5, 6], "a");
    }).toThrow("[ERROR]");
  });
  test("bonusNumber에 1~45 사이의 숫자가 아닌 값이 들어오면 에러를 던진다.", () => {
    expect(() => {
      Validator.bonusNumber([1, 2, 3, 4, 5, 6], 46);
    }).toThrow("[ERROR]");
  });
});
