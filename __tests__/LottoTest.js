import Lotto from "../src/domain/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // 아래에 추가 테스트 작성 가능
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 6개가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 1부터 45 범위에 있어야 한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 46, 47]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 1부터 45 범위에 있는 유효한 배열이면 객체를 생성한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getLottoNumber()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
