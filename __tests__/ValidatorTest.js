import Validator from "../src/utils/Validator.js";

describe("Validator 객체 테스트", () => {
  test("purchaseAmount 메서드가 유효한 금액이 아니라면 예외를 발생시킨다.", () => {
    const money = [0, "a", "", " ", 100, 1200];

    money.forEach((result) => {
      expect(() => {
        Validator.purchaseAmount(result);
      }).toThrow("[ERROR]");
    });
  });

  test("purchaseAmount 메서드가 유효한 금액이라면 예외를 발생시키지 않는다.", () => {
    const money = [1000, 10000, 90000];

    money.forEach((result) => {
      expect(() => {
        Validator.purchaseAmount(result);
      }).not.toThrow("[ERROR]");
    });
  });

  test.each([
    [[1, 2, 3, 4, 5]],
    [[1, 2, 3, 4, 5, 5]],
    [[1, 2, 3, 4, 5, 46]],
    [[0, 2, 3, 4, 5, 6]],
    [["a", 2, 3, 4, 5, 6]],
    [["", 2, 3, 4, 5, 6]],
    [[" ", 2, 3, 4, 5, 6]],
  ])(
    "winningNumbers 메서드가 유효한 로또 번호가 아니라면 예외를 발생시킨다.",
    (winningNumbers) => {
      expect(() => {
        Validator.winningNumbers(winningNumbers);
      }).toThrow("[ERROR]");
    }
  );

  test.each([[[1, 2, 3, 4, 5, 6]], [[1, 2, 3, 19, 5, 43]]])(
    "winningNumbers 메서드가 유효한 로또 번호라면 예외를 발생시키지 않는다.",
    (winningNumbers) => {
      expect(() => {
        Validator.winningNumbers(winningNumbers);
      }).not.toThrow("[ERROR]");
    }
  );

  test("bonusNumber 메서드가 유효한 번호가 아니라면 예외를 발생시킨다.", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumbers = [0, 46, 5, "", " ", "a"];

    bonusNumbers.forEach((bonusNumber) => {
      expect(() => {
        Validator.bonusNumber(winningNumbers, bonusNumber);
      }).toThrow("[ERROR]");
    });
  });

  test("bonusNumber 메서드가 유효한 번호라면 예외를 발생시키지 않는다.", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    expect(() => {
      Validator.bonusNumber(winningNumbers, bonusNumber);
    }).not.toThrow("[ERROR]");
  });
});
