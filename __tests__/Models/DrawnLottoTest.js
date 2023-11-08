import LottoError from "../../src/Error/LottoError.js";
import DrawnLotto from "../../src/Models/DrawnLotto.js";
import { LottoSettings } from "../../src/config/gameSetting.js";

const setting = new LottoSettings();
const { minOfLottoNumberRange, maxOfLottoNumberRange } =
  setting.getLottoNumberRange();

describe("DrawnLotto 클래스 테스트", () => {
  test("당첨번호와 보너스 번호가 중복되면 에러 처리해야한다.", () => {
    const drawnLottoNoBonusNum = new DrawnLotto(["1", "2", "3", "4", "5", "6"]);

    expect(() => {
      drawnLottoNoBonusNum.setBonusNumber("1");
    }).toThrow(LottoError.PREFIX);
  });

  test(`보너스 번호는 ${minOfLottoNumberRange} 이상  ${maxOfLottoNumberRange} 이하여야한다.`, () => {
    const drawnLottoNoBonusNum = new DrawnLotto(["1", "2", "3", "4", "5", "6"]);

    expect(() => {
      drawnLottoNoBonusNum.setBonusNumber("90");
    }).toThrow(LottoError.PREFIX);
  });

  test(`보너스 번호는 ${minOfLottoNumberRange} 이상  ${maxOfLottoNumberRange} 이하여야한다. - 엣지케이스`, () => {
    const drawnLottoNoBonusNum = new DrawnLotto(["2", "3", "4", "5", "6", "7"]);

    expect(() => {
      drawnLottoNoBonusNum.setBonusNumber(`${minOfLottoNumberRange}`);
    }).not.toThrow(LottoError.PREFIX);
    expect(() => {
      drawnLottoNoBonusNum.setBonusNumber(`${maxOfLottoNumberRange}`);
    }).not.toThrow(LottoError.PREFIX);
  });

  test("DrawnLotto의 numbers와 bonusNumber를 객체로 리턴해야한다", () => {
    const drawnLotto = new DrawnLotto(["1", "2", "3", "4", "5", "6"]);
    drawnLotto.setBonusNumber("7");

    const result = drawnLotto.getFullNumbers();

    expect(result).toEqual({
      drawnLottoNumbers: [1, 2, 3, 4, 5, 6],
      bonusNumber: 7,
    });
  });

  test("보너스 번호를 2개 이상 입력했을 경우 예외 처리", () => {
    const drawnLotto = new DrawnLotto(["1", "2", "3", "4", "5", "6"]);

    expect(() => drawnLotto.setBonusNumber("3,5")).toThrow();
  });

  test("숫자가 아닌 것을 보너스 번호에 입력했을 때 예외 처리", () => {
    const drawnLotto = new DrawnLotto(["1", "2", "3", "4", "5", "6"]);

    expect(() => drawnLotto.setBonusNumber("3 5")).toThrow();
  });

  test("당첨번호와 보너스 번호를 리턴해야한다.", () => {
    const drawnLotto = new DrawnLotto(["1", "2", "3", "4", "5", "6"]);
    drawnLotto.setBonusNumber("7");

    expect(drawnLotto.getBonusNumber()).toBe(7);
    expect(drawnLotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    expect(drawnLotto.getFullNumbers()).toEqual({
      drawnLottoNumbers: [1, 2, 3, 4, 5, 6],
      bonusNumber: 7,
    });
  });
});
