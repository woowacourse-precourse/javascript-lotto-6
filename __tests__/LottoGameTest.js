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
  // 아래에 추가 테스트 작성 가능
});
