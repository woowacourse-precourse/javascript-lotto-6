import Validator from "../src/Validator";

describe("Validator 모듈 테스트", () => {
  test("validateAmount(): 유효한 구입 금액일 때 예외를 던지지 않는다.", () => {
    expect(() => {
      Validator.validateAmount(6000);
    }).not.toThrow();
  });

  test("validateAmount(): 음수 또는 1000의 배수가 아닌 금액일 때 예외를 던진다.", () => {
    expect(() => {
      Validator.validateAmount(-5000);
    }).toThrow("[ERROR] 올바른 구입 금액을 입력하세요");

    expect(() => {
      Validator.validateAmount(1500);
    }).toThrow("[ERROR] 올바른 구입 금액을 입력하세요");
  });

  test("validateNumbers(): 유효한 로또 번호일 때 예외를 던지지 않는다.", () => {
    expect(() => {
      Validator.validateNumbers([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });

  test("validateNumbers(): 유효하지 않은 로또 번호일 때 예외를 던진다.", () => {
    expect(() => {
      Validator.validateNumbers([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR] 올바른 로또 번호를 입력하세요.");

    expect(() => {
      Validator.validateNumbers([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 로또 번호는 중복될 수 없습니다.");
  });

  test("validateBonusNumber(): 유효한 보너스 번호일 때 예외를 던지지 않는다.", () => {
    expect(() => {
      Validator.validateBonusNumber(7, [1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });

  test("validateBonusNumber(): 유효하지 않은 보너스 번호일 때 예외를 던진다.", () => {
    expect(() => {
      Validator.validateBonusNumber(46, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 올바른 보너스 번호를 입력하세요.");

    expect(() => {
      Validator.validateBonusNumber(3, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 올바른 보너스 번호를 입력하세요.");

    expect(() => {
      Validator.validateBonusNumber(5, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 올바른 보너스 번호를 입력하세요.");
  });
});
