import Lotto from "../src/Lotto.js";
import validatePurchaseAmount from "../src/validatePurchaseAmount.js";
import validateBonusNumber from "../src/validateBonusNumber.js";

describe("로또 번호 테스트", () => {
  test("로또 번호 유효성 검사", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호 중복 검사", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호 범위 및 정렬 검사", () => {
    expect(() => {
      new Lotto([1, 2, 4, 3, 6, 5]);
    }).toThrow("[ERROR]");
  });
});

describe("보너스 번호 테스트", () => {
  test("보너스 번호 유효성 검사", () => {
    expect(() => {
      validateBonusNumber("a", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호 중복 검사", () => {
    expect(() => {
      validateBonusNumber(1, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});

describe("구입금액 테스트", () => {
  test("구입금액 유효성 검사", () => {
    expect(() => {
      validatePurchaseAmount("a");
    }).toThrow("[ERROR]");
  });

  test("구입금액 음수 및 소수점 검사", () => {
    expect(() => {
      validatePurchaseAmount(-1001);
    }).toThrow("[ERROR]");

    expect(() => {
      validatePurchaseAmount(1.2);
    }).toThrow("[ERROR]");
  });
});
