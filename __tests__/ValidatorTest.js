import Validator from "../src/utils/Validator.js";

describe("입력값 유효성 검사 테스트", () => {
  test("구매금액에 아무 값도 입력하지 않거니 0만 입력한 경우를 확인", () => {
    const priceInput = ["", "0", "000"];

    priceInput.forEach((price) => {
      expect(() => {
        Validator.InputPurchaseAmount(price);
      }).toThrow();
    });
  });

  test("구매금액에 숫자가 아닌 다른 문자가 들어있는 경우를 확인", () => {
    const priceInput = ["-1000", "10d", "20O0"];

    priceInput.forEach((price) => {
      expect(() => {
        Validator.InputPurchaseAmount(price);
      }).toThrow();
    });
  });

  test("구매금액이 1000원 단위로 나누어 떨어지지 않는 경우를 확인", () => {
    const priceInput = ["5322", "9500"];

    priceInput.forEach((price) => {
      expect(() => {
        Validator.InputPurchaseAmount(price);
      }).toThrow();
    });
  });

  test("당첨 번호가 숫자로 구성되어있지 않는 경우를 확인", () => {
    const winningNumberInput = ["1,2,3,4,5,육", "일,이,삼,사,오,six"];

    winningNumberInput.forEach((numbers) => {
      expect(() => {
        Validator.InputWinningNumber(numbers);
      }).toThrow();
    });
  });

  test("당첨 번호가 서로 중복되어 있는 경우를 확인", () => {
    const winningNumberInput = ["1,2,3,3,4,5", "1,4,1,2,1,1"];

    winningNumberInput.forEach((number) => {
      expect(() => {
        Validator.InputWinningNumber(number);
      }).toThrow();
    });
  });

  test("당첨 번호 갯수가 6개가 아닌 경우를 확인", () => {
    const winningNumberInput = ["1,2,3,4", "1,2"];

    winningNumberInput.forEach((number) => {
      expect(() => {
        Validator.InputWinningNumber(number);
      }).toThrow();
    });
  });

  test("당첨 번호에 1부터 45 사이의 값이 아닌 다른 값이 포함된 경우를 확인", () => {
    const winningNumberInput = [
      "1,2,3,4,5,46",
      "0,1,2,3,4,5",
      "46,47,48,49,50,51",
    ];

    winningNumberInput.forEach((number) => {
      expect(() => {
        Validator.InputWinningNumber(number);
      }).toThrow();
    });
  });

  test("보너스 번호가 숫자가 아닌 경우를 확인", () => {
    const bonusNumberInput = ["1kigne", "n", "-103"];
    const winningNumber = ["1", "2", "3", "4", "5", "6"];

    bonusNumberInput.forEach((number) => {
      expect(() => {
        Validator.InputBonusNumber(number, winningNumber);
      }).toThrow();
    });
  });

  test("보너스 번호가 당첨 번호와 중복되는 경우를 확인", () => {
    const bonusNumberInput = ["1", "2"];
    const winningNumber = ["1", "2", "3", "4", "5", "6"];

    bonusNumberInput.forEach((number) => {
      expect(() => {
        Validator.InputBonusNumber(number, winningNumber);
      }).toThrow();
    });
  });

  test("보너스 번호가 1과 45 사이의 값이 아닌 경우를 확인", () => {
    const bonusNumberInput = ["0", "46", "100"];
    const winningNumber = ["1", "2", "3", "4", "5", "6"];

    bonusNumberInput.forEach((number) => {
      expect(() => {
        Validator.InputBonusNumber(number, winningNumber);
      }).toThrow();
    });
  });
});
