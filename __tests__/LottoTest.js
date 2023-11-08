import Lotto from "../src/Lotto.js";
import validatePrice from "../src/validatePrice.js";

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

  test("로또 번호 중 하나라도 숫자가 아니면(문자를 포함하면) 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "a"]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호 중 하나라도 소수점을 포함하는 숫자이면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4.5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호 중 하나라도 1부터 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 46, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호 정상 작동하는 경우", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });

  test("보너스 번호에 콤마(,)가 포함되면 예외가 발생한다.", () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.validateBonusNum([1, 2, 3, 4, 5, 6], "1, 2");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 숫자가 아니면(문자를 포함하면) 예외가 발생한다.", () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.validateBonusNum([1, 2, 3, 4, 5, 6], "1a");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 로또 번호 중 하나이면 예외가 발생한다.", () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.validateBonusNum([1, 2, 3, 4, 5, 6], "1");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.validateBonusNum([1, 2, 3, 4, 5, 6], "46");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호 정상 작동하는 경우", () => {
    expect(() => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      lotto.validateBonusNum([1, 2, 3, 4, 5, 6], "7");
    }).not.toThrow();
  });
});


describe("구매 금액 유효성 테스트", () => {
  test("구매 금액이 숫자가 아니면(문자를 포함하면) 예외가 발생한다.", () => {
    expect(() => {
      validatePrice("2000won");
    }).toThrow("[ERROR]");
  });

  test("구매 금액이 0 이하이면 예외가 발생한다.", () => {
    expect(() => {
      validatePrice("0");
    }).toThrow("[ERROR]");
  });

  test("구매 금액이 1000으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      validatePrice("1500");
    }).toThrow("[ERROR]");
  });
});