import Lotto from "../src/model/Lotto.js";
import BonusLotto from "../src/model/BonusLotto.js";

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

  // 아래에 추가 테스트 작성 가능
  test("로또 번호에 1보다 작은 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 0]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 45보다 큰 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "abc"]);
    }).toThrow("[ERROR]");
  });

  test("로또 compare 함수 테스트", async () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const lotto2 = new Lotto([1, 2, 3, 4, 5, 6]);
    const lotto3 = new Lotto([1, 2, 3, 4, 5, 7]);

    expect(await lotto.compare(lotto2)).toBe(6);
    expect(await lotto.compare(lotto3)).toBe(5);
  });
});

describe("보너스 로또 클래스 테스트", () => {
  test("보너스 로또 번호가 로또 번호에 포함되면 예외가 발생한다.", () => {
    expect(() => {
      new BonusLotto(1, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 로또 번호가 최대, 최소 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      new BonusLotto(-7, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");

    expect(() => {
      new BonusLotto(46, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 로또 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new BonusLotto("abc", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});
