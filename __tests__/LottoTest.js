import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 중복된 숫자는 입력할 수 없습니다.");
  });

  test("로또 번호가 1미만 혹은 45 초과이면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([5, 0, 3, -4, 56, 6]);
    }).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  })

  test("로또 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([5, 11, 3, '예외', 39, 20]);
    }).toThrow("[ERROR] 로또 번호는 숫자여야 합니다.");
  })
});

describe("로또 클래스 입력값 테스트", () => {
  test("구입 금액이 1000원 단위가 아니면 예외가 발생한다.", () => {
    const invalidAmount = "1500";
    expect(() => {
      Lotto.validatePurchaseAmount(invalidAmount);
    }).toThrow("[ERROR] 로또 구입 금액은 1,000원 단위로 입력해야 합니다.");
  });

  test("보너스 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    const invalidBonusNumber = "46";
    const winningNumbers = [3, 15, 22, 28, 33, 42];
    expect(() => {
      Lotto.validateBonusNumber(invalidBonusNumber, winningNumbers);
    }).toThrow("[ERROR] 보너스번호는 1에서 45 사이의 숫자여야 합니다.");
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    const bonusNumber = "3";
    const winningNumbers = [3, 15, 22, 28, 33, 42];
    expect(() => {
      Lotto.validateBonusNumber(bonusNumber, winningNumbers);
    }).toThrow("[ERROR] 보너스번호는 당첨 번호와 달라야 합니다.");
  });
});
