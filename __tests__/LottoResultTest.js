import LottoResult from "../src/LottoResult";

describe("LottoResult 클래스 테스트", () => {
  test("로또 당첨 번호의 개수가 6개가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new LottoResult().setWinningNumber(
        new Array(6 + 1).fill(0).map((value, index) => index + 1),
        6 + 2
      );
    }).toThrow("[ERROR]");
  });

  test("로또 당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new LottoResult().setWinningNumber(new Array(6).fill(1), 2);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 로또 번호중에 있다면 예외가 발생한다.", () => {
    expect(() => {
      new LottoResult().setWinningNumber(
        new Array(6).fill(0).map((value, index) => index + 1),
        6
      );
    }).toThrow("[ERROR]");
  });
});
