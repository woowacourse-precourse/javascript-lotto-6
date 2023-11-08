import BonusLotto from "../src/BonusLotto";
import Lotto from "../src/Lotto";

describe("보너스 로또 클래스 테스트", () => {
  const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
  test("보너스 로또 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new BonusLotto(lotto.getNumbers, "a");
    }).toThrow("[ERROR]");
  });

  test("보너스 로또 번호가 1~45 사이가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new BonusLotto(lotto.getNumbers, "46");
    }).toThrow("[ERROR]");
  });

  test("보너스 로또 번호가 로또 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      new BonusLotto(lotto.getNumbers, 6);
    }).toThrow("[ERROR]");
  });

  test("보너스 로또 번호가 잘 입력됐을 경우에는 true를 리턴한다", () => {
    expect(() => {
      new Lotto(lotto.getNumbers, 10);
    }).toBeTruthy();
  });
});
