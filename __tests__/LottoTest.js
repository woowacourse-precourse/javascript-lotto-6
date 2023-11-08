import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호가 6개가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

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

  test("로또 번호가 1보다 작거나 45보다 크면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호와 당첨 번호가 중복되면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6], [6]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호를 정상적으로 생성하는지 확인", () => {
    const lotto = new Lotto();
    const numbers = lotto.getLottoNumbers(5);
    expect(numbers.length).toBe(5);
    numbers.forEach((lottoNumber) => {
      expect(lottoNumber.length).toBe(6);
      expect(lottoNumber.every((num) => num >= 1 && num <= 45)).toBe(true);
      expect(new Set(lottoNumber).size).toBe(6);
    });
  });
});
