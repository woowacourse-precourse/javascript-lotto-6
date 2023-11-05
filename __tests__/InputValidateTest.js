import Validator from "../src/utils/Validator.js";

describe("입력값 유효성 검사 테스트", () => {
  test("구매금액에 아무 값도 입력하지 않거니 0만 입력한 경우를 확인", () => {
    const priceInput = ["", "0", "000"];

    priceInput.forEach((price) => {
      expect(() => {
        Validator.inputPurchaseAmount(price);
      }).toThrow();
    });
  });

  test("구매금액에 숫자가 아닌 다른 문자가 들어있는 경우를 확인", () => {
    const priceInput = ["-1000", "10k", "20O"];

    priceInput.forEach((price) => {
      expect(() => {
        Validator.inputPurchaseAmount(price);
      }).toThrow();
    });
  });

  test("구매금액이 1000원 단위로 나누어 떨어지지 않는 경우를 확인", () => {
    const priceInput = ["1030", "10500"];

    priceInput.forEach((price) => {
      expect(() => {
        Validator.inputPurchaseAmount(price);
      }).toThrow();
    });
  });

  test("당첨 번호가 숫자로 구성되어있지 않는 경우를 확인", () => {
    const winningNumberInput = ["1,2,3,4,5,육", "일,이,삼,사,오,육"];

    winningNumberInput.forEach((numbers) => {
      expect(() => {
        Validator.inputWinningNumber(numbers);
      }).toThrow();
    });
  });

  test("당첨 번호가 서로 중복되어 있는 경우를 확인", () => {
    const winningNumberInput = ["1,2,3,3,4,5", "1,1,1,1,1,1"];

    winningNumberInput.forEach((number) => {
      expect(() => {
        Validator.inputWinningNumber(number);
      }).toThrow();
    });
  });

  test("당첨 번호 갯수가 6개가 아닌 경우를 확인", () => {
    const winningNumberInput = ["1,2,3,4,5", "1,2,3"];

    winningNumberInput.forEach((number) => {
      expect(() => {
        Validator.inputPurchaseAmount(number);
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
        Validator.inputWinningNumber(number);
      }).toThrow();
    });
  });

  test("보너스 번호가 숫자가 아닌 경우를 확인", () => {
    const bonusNumberInput = ["1k", "n", "-1"];
    const winningNumber = ["1", "2", "3", "4", "5", "6"];

    bonusNumberInput.forEach((number) => {
      expect(() => {
        Validator.inputBonusNumber(number, winningNumber);
      }).toThrow();
    });
  });

  test("보너스 번호가 당첨 번호와 중복되는 경우를 확인", () => {
    const bonusNumberInput = ["1", "2"];
    const winningNumber = ["1", "2", "3", "4", "5", "6"];

    bonusNumberInput.forEach((number) => {
      expect(() => {
        Validator.inputBonusNumber(number, winningNumber);
      }).toThrow();
    });
  });

  test("보너스 번호가 1과 45 사이의 값이 아닌 경우를 확인", () => {
    const bonusNumberInput = ["0", "46", "100"];
    const winningNumber = ["1", "2", "3", "4", "5", "6"];

    bonusNumberInput.forEach((number) => {
      expect(() => {
        Validator.inputBonusNumber(number, winningNumber);
      }).toThrow();
    });
  });
});
