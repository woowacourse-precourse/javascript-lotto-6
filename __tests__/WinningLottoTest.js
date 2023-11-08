import WinningLotto from "../src/WinningLotto";

describe("당첨 로또 클래스 테스트", () => {
  test("이미 존재하는 번호를 보너스 번호로 설정하면 예외가 발생한다.", () => {
    expect(() => {
      const WINNING_LOTTO = new WinningLotto([1, 2, 3, 4, 5, 6]);
      WINNING_LOTTO.set_bonus(2);
    }).toThrow("[ERROR]");
  });
});
