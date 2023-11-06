import Lotto from "../src/domains/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("로또 번호에 중복이 있으면 예외를 발생한다.", () => {
    expect(() => {
      new Lotto([1, 1, 2, 3, 4, 5]);
    }).toThrow("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 정보는 오름차순으로 정렬된 정수를 반환해야 한다.", () => {
    // given
    const lotto = new Lotto([6, 5, 4, 1, 2, 3]);

    // when
    const numbers = lotto.getNumbers();
    // then
    expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
