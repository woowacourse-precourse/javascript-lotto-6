import Lotto from "../src/Lotto.js";
import Lottos from "../src/Lottos.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호의 개수가 6개가 넘지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 1~45 범위가 아닌 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });
});


describe("로또 계산 클래스 테스트", () => {
  test("구매한 로또의 비용이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lottos('1q2w3e');
    }).toThrow("[ERROR]");
  });

  test("구매한 로또의 비용이 1000원 이상을 넘지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Lottos(500);
    }).toThrow("[ERROR]");
  });

  test("구매한 로또의 비용이 1000원으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Lottos(999);
    }).toThrow("[ERROR]");
  });
});
