import BonusLotto from ".../src/BonusLotto";

describe("보너스 로또 클래스 테스트", () => {
  test("보너스 로또 번호의 개수가 1개가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new BonusLotto([1]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new BonusLotto(["a"]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 잘 입력됐을 경우에는 true를 리턴한다", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).toBeTruthy();
  });
});
