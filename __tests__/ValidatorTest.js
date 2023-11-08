import LottoValidator from "../src/Validator.js";
import ErrorMessages from "../src/ErrorMessages";

describe("LottoValidator 클래스 테스트", () => {
  let validator;

  beforeEach(() => {
    validator = new LottoValidator();
  });

  describe("validatePurchaseAmount 메서드", () => {
    test("구매 금액이 숫자가 아니면 예외가 발생한다.", () => {
      expect(() => {
        validator.validatePurchaseAmount("숫자가 아님");
      }).toThrow(ErrorMessages.INVALID_NUMBER);
    });

    test("구매 금액이 1,000원으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
      expect(() => {
        validator.validatePurchaseAmount(2500);
      }).toThrow(ErrorMessages.UNDIVIDED_AMOUNT);
    });

    test("구매 금액이 0원 이하면 예외가 발생한다.", () => {
      expect(() => {
        validator.validatePurchaseAmount(-1000);
      }).toThrow(ErrorMessages.UNDIVIDED_AMOUNT);
    });
  });

  describe("validateNumbers 메서드", () => {
    test("당첨 번호가 숫자가 아니면 예외가 발생한다.", () => {
      expect(() => {
        validator.validateNumbers([1, 2, 3, 4, 5, "숫자가 아님"]);
      }).toThrow(ErrorMessages.INVALID_NUMBER);
    });

    test("당첨 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
      expect(() => {
        validator.validateNumbers([0, 2, 3, 4, 5, 6]);
      }).toThrow(ErrorMessages.OUT_OF_RANGE);

      expect(() => {
        validator.validateNumbers([1, 2, 3, 4, 5, 46]);
      }).toThrow(ErrorMessages.OUT_OF_RANGE);
    });

    test("당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
      expect(() => {
        validator.validateNumbers([1, 2, 3, 4, 5, 5]);
      }).toThrow(ErrorMessages.DUPLICATE_NUMBER);
    });

    test("당첨 번호의 개수가 6이 아니면 예외가 발생한다.", () => {
      expect(() => {
        validator.validateNumbers([1, 2, 3, 4, 5]);
      }).toThrow(ErrorMessages.INVALID_LENGTH);

      expect(() => {
        validator.validateNumbers([1, 2, 3, 4, 5, 6, 7]);
      }).toThrow(ErrorMessages.INVALID_LENGTH);
    });
  });

  describe("validateBonusNumber 메서드", () => {
    test("보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
      expect(() => {
        validator.validateBonusNumber("숫자가 아님", [1, 2, 3, 4, 5, 6]);
      }).toThrow(ErrorMessages.ONLY_ONE_NUMBER);
    });

    test("보너스 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
      expect(() => {
        validator.validateBonusNumber(0, [1, 2, 3, 4, 5, 6]);
      }).toThrow(ErrorMessages.OUT_OF_RANGE);

      expect(() => {
        validator.validateBonusNumber(46, [1, 2, 3, 4, 5, 6]);
      }).toThrow(ErrorMessages.OUT_OF_RANGE);
    });

    test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
      expect(() => {
        validator.validateBonusNumber(1, [1, 2, 3, 4, 5, 6]);
      }).toThrow(ErrorMessages.DUPLICATE_BONUS_NUMBER);
    });
  });
});
