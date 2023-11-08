import Lotto from "../src/Lotto.js";

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

  test("로또 번호가 6개 이하인 경우 예외가 발생한다", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  })

  test("로또 번호에 숫자가 아닌 입력이 있으면 예외가 발생한다", () => {
    expect(() => {
      new Lotto([1, 2, 3, "H", 5, 6]);
    }).toThrow("[ERROR]");
  })

  test("로또 번호에 정수가 아닌 입력이 있으면 예외가 발생한다", () => {
    expect(() => {
      new Lotto([1, 2, 3, 0.7, 5, 6]);
    }).toThrow("[ERROR]");
  })

  test("로또 번호에 1부터 45 사이의 숫자가 아닌 입력이 있으면 예외가 발생한다", () => {
    expect(() => {
      new Lotto([1, 2, 33, , -5, 6]);
    }).toThrow("[ERROR]");

    expect(() => {
      new Lotto([1, 2, 3, 50, 5, 6]);
    }).toThrow("[ERROR]");
  })

  test("로또 번호를 오름차순으로 정렬", () => {
    const lottoInstance = new Lotto([6, 5, 4, 3, 2, 1]);
    const sortedNumbers = lottoInstance.getSortNumbers();
    expect(sortedNumbers).toEqual([1, 2, 3, 4, 5, 6]);
  })
});
