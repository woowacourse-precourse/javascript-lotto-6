import LottoError from "../../src/Error/LottoError.js";
import Lotto from "../../src/Lotto.js";
import { LottoSettings } from "../../src/config/gameSetting.js";

const setting = new LottoSettings();
const { minOfLottoNumberRange, maxOfLottoNumberRange } =
  setting.getLottoNumberRange();
const numberPerLotto = setting.getNumberPerLotto();

describe("로또 클래스 테스트", () => {
  test(`로또 번호의 개수가 ${numberPerLotto}개가 넘어가면 예외가 발생한다.`, () => {
    expect(() => {
      new Lotto(["1", "2", "3", "4", "5", "6", "7"]);
    }).toThrow(LottoError.PREFIX);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(["1", "2", "3", "4", "5", "5"]);
    }).toThrow(LottoError.PREFIX);
  });

  test("로또 번호는 숫자만 입력이 가능하다", () => {
    expect(() => {
      new Lotto(["1;", "a", "3", "4", "5", "6"]);
    }).toThrow(LottoError.PREFIX);
  });

  test("로또 번호는 오름차순으로 정렬되어야한다.", () => {
    expect(new Lotto(["6", "5", "4", "3", "2", "1"]).getNumbers()).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });

  test(`로또 번호는 ${minOfLottoNumberRange} 이상  ${maxOfLottoNumberRange} 이하여야한다.`, () => {
    expect(() => new Lotto(["1", "2", "3", "4", "5", "90"])).toThrow(
      LottoError.PREFIX
    );
  });

  test(`로또 번호는 ${minOfLottoNumberRange} 이상  ${maxOfLottoNumberRange} 이하여야한다. - 엣지케이스`, () => {
    expect(
      () =>
        new Lotto([
          `${minOfLottoNumberRange}`,
          "2",
          "3",
          "4",
          "5",
          `${maxOfLottoNumberRange}`,
        ])
    ).not.toThrow(LottoError.PREFIX);
  });

  test("Lotto 인스턴스의 numbers를 리턴해야한다.", () => {
    const lotto = new Lotto(["1", "2", "3", "4", "5", "6"]);
    const numbers = lotto.getNumbers();

    expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
