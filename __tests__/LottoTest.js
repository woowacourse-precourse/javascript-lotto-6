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

  test("getLottoNumbers getter로 생성된 로또 번호를 조회할 수 있다.", () => {
    expect(new Lotto([1, 2, 3, 4, 5, 6]).getLottoNumbers).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });

  test("checkLotto 메서드로 당첨 등수 반영을 위한 인덱스 번호를 받을 수 있다.", () => {
    const winnings = [1, 2, 3, 4, 5, 6];
    const bonus = 7;
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.checkLotto(winnings, bonus)).toEqual(4);
  });
});
