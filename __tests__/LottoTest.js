import Lotto from "../src/Lotto.js";
import BudgetValidator from "../src/utils/BudgetValidator.js";

describe("구입 금액 입력 테스트", () => {
  test("구입금액에 숫자가 아닌 것이 입력된 경우 예외가 발생한다", () => {
    expect(() => {
      BudgetValidator.isNum("123f");
    }).toThrow("[ERROR] 구입 금액은 숫자를 입력해주세요");
  });
});

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
});
