import Lotto from "../src/Lotto.js";
import validateBonusNumber from "../src/validateBonusNumber.js";
import validatePurchaseAmount from "../src/validatePurchaseAmount.js";

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

  test("로또 번호의 개수가 5개 이하라면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(["a", 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 정수가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1.3, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호의 숫자 중 1보다 작은 값이 있는 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([-1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호의 숫자 중 45보다 큰 값이 있는 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 48]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 오름차순 정렬이 안 되어 있을 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 6, 5]);
    }).toThrow("[ERROR]");
  });
});

describe("보너스 번호 유효성 테스트", () => {
  test("보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      validateBonusNumber("a", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 정수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      validateBonusNumber(2.5, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      validateBonusNumber(-1, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 45보다 크면 예외가 발생한다.", () => {
    expect(() => {
      validateBonusNumber(47, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      validateBonusNumber(5, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });
});

describe("구입금액 유효성 테스트", () => {
  test("구입금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      validatePurchaseAmount("a");
    }).toThrow("[ERROR]");
  });

  test("구입금액이 정수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      validatePurchaseAmount(1000.5);
    }).toThrow("[ERROR]");
  });

  test("구입금액이 0이면 예외가 발생한다.", () => {
    expect(() => {
      validatePurchaseAmount(0);
    }).toThrow("[ERROR]");
  });

  test("구입금액이 0보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      validatePurchaseAmount(-2000);
    }).toThrow("[ERROR]");
  });

  test("구입금액이 1,000으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
    expect(() => {
      validatePurchaseAmount(2500);
    }).toThrow("[ERROR]");
  });
});
