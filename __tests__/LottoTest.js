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
    }).toThrow("[ERROR] 중복된 숫자가 있습니다.");
  });
  
  test("로또 번호에 1부터 45의 숫자가 아닌 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 12, '이십', 34, 45, 55]);
    }).toThrow("[ERROR] 로또 번호는 1부터 45의 숫자만 사용하실 수 있습니다.");
  });

  test("구입금액이 숫자가 아닌 경우 예외를 던져야 합니다", () => {
    const lotto = new Lotto([]);
    expect(() => {
      lotto.repeatLottoNumber('오백')
    }).toThrow("[ERROR] 숫자만 입력 가능합니다.");
  });

  test("구입금액이 1000의 배수가 아닌 경우 예외를 던져야 합니다", () => {
    const lotto = new Lotto([]);
    expect(() => {
      lotto.repeatLottoNumber('500')
    }).toThrow("[ERROR] 구입금액은 반드시 1000원 단위이여야 합니다.");
  });
});
