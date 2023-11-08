import Assert from "../src/core/Assert.js";
import {
  BonusNumberError,
  PurchaseValueError,
  WinningNumberError,
} from "../src/utils/Error.js";

describe("Assert 클래스 테스트", () => {
  /** @type {Assert} */
  let assert;

  beforeEach(() => {
    assert = new Assert();
  });

  test("로또 구입 금액이 올바른 금액인가?", () => {
    const inputs = [1000, 10000, 2000];
    const errorInputs = [-1, -100, 1, 10, 1010, NaN, Infinity, -Infinity];

    inputs.forEach((input) => {
      expect(() => assert.assertPurchaseValue(input)).not.toThrow(
        PurchaseValueError
      );
    });

    errorInputs.forEach((errorInput) => {
      expect(() => assert.assertPurchaseValue(errorInput)).toThrow(
        PurchaseValueError
      );
    });
  });

  test("당첨 번호 입력 검증: 통과해야 할 케이스", () => {
    const inputs = [
      [1, 2, 3, 4, 5, 6],
      [1, 3, 5, 14, 22, 45],
      [1, 8, 11, 31, 41, 42],
    ];

    inputs.forEach((input) => {
      expect(() => assert.assertWinningNumber(input)).not.toThrow(
        WinningNumberError
      );
    });
  });

  test("당첨 번호 입력 검증: 6개로 나누어지지 않음", () => {
    const inputs = [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7], [], [123456]];

    inputs.forEach((input) => {
      expect(() => assert.assertWinningNumber(input)).toThrow(
        new WinningNumberError(WinningNumberError.TYPE_NOT_AMOUNT_6)
      );
    });
  });

  test("당첨 번호 입력 검증: 유효한 숫자 범위가 아님", () => {
    const inputs = [
      [NaN, 1, 2, 3, 4, 5],
      [0, 1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5, 46],
    ];

    inputs.forEach((input) => {
      expect(() => assert.assertWinningNumber(input)).toThrow(
        new WinningNumberError(WinningNumberError.TYPE_OUT_OF_RANGE)
      );
    });
  });

  test("당첨 번호 입력 검증: 중복된 숫자가 존재함", () => {
    const inputs = [[1, 1, 2, 3, 4, 5]];

    inputs.forEach((input) => {
      expect(() => assert.assertWinningNumber(input)).toThrow(
        new WinningNumberError(WinningNumberError.TYPE_DUPLICATED)
      );
    });
  });

  test("보너스 번호 입력 검증: 통과해야 할 케이스", () => {
    const inputs = [
      [1, [2, 3, 4, 5, 6, 7]],
      [7, [1, 2, 3, 4, 5, 6]],
      [45, [1, 2, 3, 4, 5, 6]],
    ];

    inputs.forEach((input) => {
      expect(() => assert.assertBounsNumber(input[0], input[1])).not.toThrow(
        BonusNumberError
      );
    });
  });

  test("보너스 번호 입력 검증: 유효한 숫자 범위가 아님", () => {
    const inputs = [
      [0, [2, 3, 4, 5, 6, 7]],
      [46, [1, 2, 3, 4, 5, 6]],
    ];

    inputs.forEach((input) => {
      expect(() => assert.assertBounsNumber(input[0], input[1])).toThrow(
        new BonusNumberError(BonusNumberError.TYPE_OUT_OF_RANGE)
      );
    });
  });

  test("보너스 번호 입력 검증: 중복된 숫자가 존재함", () => {
    const inputs = [
      [1, [1, 2, 3, 4, 5, 6]],
      [6, [1, 2, 3, 4, 5, 6]],
    ];

    inputs.forEach((input) => {
      expect(() => assert.assertBounsNumber(input[0], input[1])).toThrow(
        new BonusNumberError(BonusNumberError.TYPE_DUPLICATED)
      );
    });
  });
});
