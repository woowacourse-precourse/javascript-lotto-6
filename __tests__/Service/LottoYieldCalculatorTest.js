import DrawnLotto from "../../src/Models/DrawnLotto.js";
import Lotto from "../../src/Models/Lotto.js";
import LottoYieldCalculator from "../../src/service/LottoYieldCalculator.js";

describe("LottoYeildCaculator 클래스 테스트", () => {
  test("5개 맞으면 보너스 번호도 체크해야한다.", () => {
    const lotto = new Lotto(["1", "2", "3", "4", "5", "8"]);
    const drawnLotto = new DrawnLotto(["1", "2", "3", "4", "5", "6"], "8");
    expect(LottoYieldCalculator.calculate(lotto, drawnLotto)).toBe(6);
  });
});
