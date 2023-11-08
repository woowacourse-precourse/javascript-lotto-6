import LottoDrawing from "../src/LottoDrawing";
import Lotto from "../src/Lotto";

describe("보너스 번호 테스트", () => {
  let lottoDrwaing = new LottoDrawing();
  let lotto = new Lotto([1, 2, 3, 4, 5, 6]);
  lottoDrwaing.setWinningLotto(lotto);

  test("보너스 번호가 당첨 번호에 존재하면 예외가 발생한다.", () => {
    expect(() => {
      lottoDrwaing.vaildateBonusNumber(6);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 당첨 번호에 존재하면 예외가 발생한다.", () => {
    expect(() => {
      lottoDrwaing.vaildateBonusNumber("6");
    }).toThrow("[ERROR]");
  });

  test("당첨 번호가 1 ~ 45 사이가 아니면 예외가 발생한다.", () => {
    expect(() => {
      lottoDrwaing.vaildateBonusNumber("46");
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      lottoDrwaing.vaildateBonusNumber("a");
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 정수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      lottoDrwaing.vaildateBonusNumber(4.6);
    }).toThrow("[ERROR]");
  });

  test("당첨 번호에 존재하지 않으면 성공한다.", () => {
    expect(() => {
      lottoDrwaing.vaildateBonusNumber(7);
    }).not.toThrowError();
  });
});
