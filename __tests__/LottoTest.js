import Lotto from "../src/model/Lotto.js";

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
  test("로또 번호에 1 ~ 45 범위를 벗어나는 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호는 오름차순으로 정렬되어야 한다.", () => {
    const lotto = new Lotto([5, 4, 3, 2, 1, 45]);
    expect(lotto.lottoNumbers).toEqual([1, 2, 3, 4, 5, 45]);
  });

  test(`로또 클래스는 "[숫자1, 숫자2, ..., 숫자6]" 형식의 문자열로 반환`, () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.toString()).toEqual("[1, 2, 3, 4, 5, 6]");
  });
});
