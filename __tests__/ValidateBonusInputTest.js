/* eslint-disable no-undef */
import { ERROR_MESSAGE } from "../src/constant/Error.js";
import { validateBonus } from "../src/validator/ValidateBonus.js";
import Lotto from "../src/Lotto.js";

const WINNING_NUMBER = new Lotto([1, 2, 3, 4, 5, 6]);

describe("로또 보너스 번호 입력 테스트", () => {
  test("비어있거나 빈칸이 포함되어 있으면 예외가 발생한다.", () => {
    const empty = "";
    const spaces = "   ";
    expect(() => validateBonus(empty, WINNING_NUMBER)).toThrow(
      ERROR_MESSAGE.inputEmpty
    );
    expect(() => validateBonus(spaces, WINNING_NUMBER)).toThrow(
      ERROR_MESSAGE.inputEmpty
    );
  });

  test("문자가 입력되면 예외가 발생한다.", () => {
    const input = "a";
    expect(() => validateBonus(input, WINNING_NUMBER)).toThrow(
      ERROR_MESSAGE.inputString
    );
  });

  test("자연수 이외의 실수가 입력되면 예외가 발생한다.", () => {
    const zero = "0";
    const decimal = "1.5";
    const negative = "-1";
    expect(() => validateBonus(zero, WINNING_NUMBER)).toThrow(
      ERROR_MESSAGE.inputNaturalNumber
    );
    expect(() => validateBonus(decimal, WINNING_NUMBER)).toThrow(
      ERROR_MESSAGE.inputNaturalNumber
    );
    expect(() => validateBonus(negative, WINNING_NUMBER)).toThrow(
      ERROR_MESSAGE.inputNaturalNumber
    );
  });

  test("1 ~ 45 이외의 값이 입력되면 예외가 발생한다.", () => {
    const input = "46";
    expect(() => validateBonus(input, WINNING_NUMBER)).toThrow(
      ERROR_MESSAGE.outRangeLottoNumber
    );
  });

  test("당첨 번호 중에 중복된 번호가 존재하면 예외가 발생한다.", () => {
    const input = "1";
    expect(() => validateBonus(input, WINNING_NUMBER)).toThrow(
      ERROR_MESSAGE.bonusWinningDuplication
    );
  });
});
