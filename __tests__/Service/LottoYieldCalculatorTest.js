import DrawnLotto from "../../src/Models/DrawnLotto.js";
import Lotto from "../../src/Models/Lotto.js";
import LOTTO_SETTINGS from "../../src/config/gameSetting.js";
import LottoYieldCalculator from "../../src/service/LottoYieldCalculator.js";

describe("LottoYeildCaculator 클래스 테스트", () => {
  const { PRIZES } = LOTTO_SETTINGS;
  test("5개 맞으면 보너스 번호도 체크해야한다.", () => {
    const lotto = new Lotto(["1", "2", "3", "4", "5", "8"]);
    const drawnLotto = new DrawnLotto(["1", "2", "3", "4", "5", "6"], "8");
    expect(LottoYieldCalculator.calculate(lotto, drawnLotto)).toBe(
      PRIZES.SECOND
    );
  });

  test("1등하는 케이스.", () => {
    const lotto = new Lotto(["1", "2", "3", "4", "5", "6"]);
    const drawnLotto = new DrawnLotto(["1", "2", "3", "4", "5", "6"], "8");
    expect(LottoYieldCalculator.calculate(lotto, drawnLotto)).toBe(
      PRIZES.FIRST
    );
  });

  test("3등하는 케이스", () => {
    const lotto = new Lotto(["1", "2", "3", "4", "5", "6"]);
    const drawnLotto = new DrawnLotto(["1", "2", "3", "4", "5", "7"], "8");
    expect(LottoYieldCalculator.calculate(lotto, drawnLotto)).toBe(
      PRIZES.THIRD
    );
  });

  test("4등하는 케이스", () => {
    const lotto = new Lotto(["1", "2", "3", "4", "5", "6"]);
    const drawnLotto = new DrawnLotto(["1", "2", "3", "4", "7", "8"], "9");
    expect(LottoYieldCalculator.calculate(lotto, drawnLotto)).toBe(
      PRIZES.FOURTH
    );
  });

  test("5등하는 케이스", () => {
    const lotto = new Lotto(["1", "2", "3", "4", "5", "6"]);
    const drawnLotto = new DrawnLotto(["1", "2", "3", "7", "8", "9"], "10");
    expect(LottoYieldCalculator.calculate(lotto, drawnLotto)).toBe(
      PRIZES.FIFTH
    );
  });

  test("당첨금을 못받는 경우", () => {
    const lotto = new Lotto(["1", "2", "3", "4", "5", "6"]);
    const drawnLotto = new DrawnLotto(["1", "2", "7", "8", "9", "10"], "11");
    expect(LottoYieldCalculator.calculate(lotto, drawnLotto)).toBe(0);
  });

  test("로또가 여러개 때 총 당첨금액 구하기", () => {
    const lottos = [
      new Lotto(["1", "2", "3", "4", "5", "6"]),
      new Lotto(["1", "2", "3", "4", "5", "6"]),
      new Lotto(["1", "2", "7", "8", "9", "10"]), // 1등
      new Lotto(["1", "2", "3", "4", "5", "6"]),
      new Lotto(["1", "2", "3", "4", "5", "7"]), // 5등
    ];
    const drawnLotto = new DrawnLotto(["1", "2", "7", "8", "9", "10"], "11");
    expect(LottoYieldCalculator.getTotalPrize(lottos, drawnLotto)).toBe(
      PRIZES.FIFTH + PRIZES.FIRST
    );
  });
});
