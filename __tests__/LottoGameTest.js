import Lotto from "../src/Lotto.js";
import LottoGame from "../src/LottoGame.js";

describe("로또게임 클래스 테스트", () => {
  test("구입금액이 1000 미만이면 예외 발생", () => {
    expect(() => LottoGame.validatePurchaseAmount('-1000')).toThrow("[ERROR]");
  });

  test("구입금액이 문자가 입력되면 예외 발생", () => {
    expect(() => LottoGame.validatePurchaseAmount('wer34')).toThrow("[ERROR]");
  });

  test("구입금액이 1000원 단위가 아닌 경우 예외 발생", () => {
    expect(() => LottoGame.validatePurchaseAmount('10001')).toThrow("[ERROR]");
  });

  test("로또 번호 사이에 공백이 있는 경우 공백 제거", () => {
    expect(LottoGame.winningNumberToWinningNumberArray('1,2,3,4, 5,6')).toEqual([1,2,3,4,5,6]);
  });
  // 아래에 추가 테스트 작성 가능
});
