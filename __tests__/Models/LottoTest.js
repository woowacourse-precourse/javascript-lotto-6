import LottoError from "../../src/Error/LottoError.js";
import Lotto from "../../src/Models/Lotto.js";
import LOTTO_SETTINGS from "../../src/config/gameSetting.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(["1", "2", "3", "4", "5", "6", "7"]);
    }).toThrow(LottoError.PREFIX);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(["1", "2", "3", "4", "5", "5"]);
    }).toThrow(LottoError.PREFIX);
  });

  test("로또 번호는 오름차순으로 정렬되어야한다.", () => {
    expect(new Lotto(["6", "5", "4", "3", "2", "1"]).getNumbers()).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });

  test(`로또 번호는 ${LOTTO_SETTINGS.NUMBER_RANGE.MIN} 이상  ${LOTTO_SETTINGS.NUMBER_RANGE.MAX} 이하여야한다.`, () => {
    expect(() => new Lotto(["1", "2", "3", "4", "5", "90"])).toThrow(
      LottoError.PREFIX
    );
  });
});
