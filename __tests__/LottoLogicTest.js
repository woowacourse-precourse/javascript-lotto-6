import LottoLogic from "../src/model/LottoLogic.js";
import Lotto from "../src/model/Lotto.js";
import Money from "../src/model/Money.js";
import BonusLotto from "../src/model/BonusLotto.js";

describe("LottoLogic 클래스 테스트", () => {
  test("LottoLogic 클래스 생성 테스트", async () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const bonusLotto = new BonusLotto(7, [1, 2, 3, 4, 5, 6]);
    const money = new Money(1000);
    const lottoLogic = new LottoLogic(lotto, bonusLotto, money);

    expect(await lottoLogic.getLotto()).toBe(lotto);
    expect(await lottoLogic.getBonusLotto()).toBe(bonusLotto);
    expect(await lottoLogic.getMoney()).toBe(money);
  });
});
