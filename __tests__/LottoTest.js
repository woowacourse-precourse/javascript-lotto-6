import Lotto from '../src/model/Lotto.js';

describe("로또 클래스 테스트", () => {
  const errorMessage = "[ERROR]";

  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(errorMessage);
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5, 5, 5, 5, 6]);
    }).toThrow(errorMessage);
  });

  test("로또 번호의 개수가 6개보다 적다면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow(errorMessage);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(errorMessage);
  });

  test("로또 번호에 1 ~ 45까지의 숫자가 아닌 번호가 오면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(errorMessage);
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow(errorMessage);
  });

  test("로또 번호에 숫자가 아닌 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(['hyuk', 2, 3, 4, 5, 6]);
    }).toThrow(errorMessage);
    expect(() => {
      new Lotto(['1a', 2, 3, 4, 5, 6]);
    }).toThrow(errorMessage);
  });

  test("올바른 로또 번호를 입력 한다면 통과한다.", () => {
    const proper = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(proper);

    expect(lotto.lottoNumber).toEqual(proper);
  });
});
