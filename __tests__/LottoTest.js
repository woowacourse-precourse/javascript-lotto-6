import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test('로또번호가 1 ~ 45가 아니면 예외가 발생한다.', () => {
    const numbers = [0, 46, 121, 1000];

    numbers.map((number) => expect(() => {
      Lotto.validateLottoNumber(number);
    }).toThrow('[ERROR]'));
  });

  test('보너스 번호가 당첨번호와 중복된다면 예외가 발생한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]).getNumbers();

    expect(() => {
      Lotto.validateBonusNumberInWinningNumbers(lotto, 1);
    }).toThrow('[ERROR]');
  });
});
