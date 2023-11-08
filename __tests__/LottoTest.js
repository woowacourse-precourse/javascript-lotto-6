/* eslint-disable max-lines-per-function */
import Lotto from "../src/Lotto.js";
import WinningLotto from "../src/WinningLotto.js";

describe("로또 클래스 테스트", () => {
  const BONUS_NUMBER = 7;

  let winning_lotto = new WinningLotto([1, 2, 3, 4, 5, 6]);
  winning_lotto.set_bonus(BONUS_NUMBER);

  const LOTTO = {
    FIRST_WINNING: new Lotto([1, 2, 3, 4, 5, 6]),
    SECOND_WINNING: new Lotto([1, 2, 3, 4, 5, 7]),
    THIRD_WINNING: new Lotto([1, 2, 3, 4, 5, 8]),
    FOURTH_WINNING: new Lotto([1, 2, 3, 4, 8, 9]),
    FIFTH_WINNING: new Lotto([1, 2, 3, 8, 9, 10]),
    NO_WINNING: new Lotto([1, 2, 8, 9, 10, 11]),
  };

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

  // 아래에 추가 테스트 작성 가능
  test("로또 번호에 정수가 아닌 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5.5, 6]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 범위에서 벗어난 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 46, 1]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 number 타입이 아닌 다른 타입의 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, "4", 45, 1]);
    }).toThrow("[ERROR]");
  });

  /** 등수 검증 */
  test("get_winning_rank - 1등 검증", () => {
    expect(LOTTO.FIRST_WINNING.get_winning_rank(winning_lotto)).toBe(1);
  });

  test("get_winning_rank - 2등 검증", () => {
    expect(LOTTO.SECOND_WINNING.get_winning_rank(winning_lotto)).toBe(2);
  });

  test("get_winning_rank - 3등 검증", () => {
    expect(LOTTO.THIRD_WINNING.get_winning_rank(winning_lotto)).toBe(3);
  });

  test("get_winning_rank - 4등 검증", () => {
    expect(LOTTO.FOURTH_WINNING.get_winning_rank(winning_lotto)).toBe(4);
  });

  test("get_winning_rank - 5등 검증", () => {
    expect(LOTTO.FIFTH_WINNING.get_winning_rank(winning_lotto)).toBe(5);
  });

  test("get_winning_rank - 순위 밖 검증", () => {
    expect(LOTTO.NO_WINNING.get_winning_rank(winning_lotto)).toBe(0);
  });
});
