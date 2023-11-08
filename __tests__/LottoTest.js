import Lotto from "../src/Lotto.js";
import LottoGame from "../src/LottoGame.js";
import { validateInputMoney } from "../src/Validator.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 구입 가격이 1000원 단위가 아니면 예외가 발생한다.", () => {
    const invalidInputMoney = 1501;
    expect(() => {
      new validateInputMoney(invalidInputMoney);
    }).toThrow("[ERROR]");
  });

  test("당첨 로또 번호가 6개가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("당첨 로또 중 중복된 숫자가 있을 때 예외가 발생한다. ", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 1]);
    }).toThrow("[ERROR]");
  });

  test("당첨 로또 번호가 범위에 맞지 않으면 예외가 발생한다. ", () => {
    expect(() => {
      new Lotto([47, 23, 3, 4, 51]);
    }).toThrow("[ERROR]");
  });
});
