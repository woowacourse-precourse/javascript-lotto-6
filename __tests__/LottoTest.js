/* eslint-disable no-undef */
import Lotto from "../src/Lotto.js";
import { ERROR_MESSAGE } from "../src/constant/Error.js";
describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.outCountLottoNumbers);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE.lottoDuplication);
  });

  test("로또 번호에 문자열이 포함되면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(["a", "b", 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGE.inputString);
  });

  test("로또 번호에 1 ~ 45 이외의 숫자가 포함되면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(ERROR_MESSAGE.outRangeLottoNumber);
  });

  test("로또 번호에 자연수 이외의 실수가 포함되면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([-1, 1, 2, 3, 4, 5]);
    }).toThrow(ERROR_MESSAGE.inputNaturalNumber);
    expect(() => {
      new Lotto([1.5, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGE.inputNaturalNumber);
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGE.inputNaturalNumber);
  });
});
