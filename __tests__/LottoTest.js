import Lotto from "../src/Lotto.js";
import MESSAGES from "../src/constants/Messages.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호에 숫자가 아닌 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "가"]);
    }).toThrow(MESSAGES.ERROR.PLEASE_ONLY_NUMBER);
  });

  test.each([[[1, 2, 3, 4, 5, 6, 7]], [[1, 2, 3, 4, 5]], [[]]])(
    "로또 번호의 개수가 6개가 넘거나 6개보다 적을 경우 예외가 발생한다.",
    (input) => {
      expect(() => {
        new Lotto(input);
      }).toThrow(MESSAGES.ERROR.INVAILD_LOTTO_LENGTH);
    }
  );

  test("로또 번호의 숫자가 1~45 범위가 아닐경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 9, 19, 29, 49]);
    }).toThrow(MESSAGES.ERROR.INVAILD_LOTTO_NUMBER);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(MESSAGES.ERROR.DUPLICATE_LOTTO_NUMBER);
  });

  test("로또 번호와 당첨 번호를 비교하여, 일치하는 숫자의 갯수를 반환한다", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningLotto = [1, 2, 3, 4, 8, 9];
    const bonusNumber = 7;
    const result = lotto.checkSameNumber(winningLotto, bonusNumber);
    expect(result).toBe(4);
  });
});
