import LottoError from "../../src/Error/LottoError";
import DrawnLotto from "../../src/Models/DrawnLotto";
import LOTTO_SETTINGS from "../../src/config/gameSetting";

describe("DrawnLotto 클래스 테스트", () => {
  test("당첨번호와 보너스 번호가 중복되면 에러 처리해야한다.", () => {
    expect(() => new DrawnLotto([1, 2, 3, 4, 5, 6], 6)).toThrow(
      LottoError.PREFIX
    );
  });

  test(`보너스 번호는 ${LOTTO_SETTINGS.NUMBER_RANGE.MIN} 이상  ${LOTTO_SETTINGS.NUMBER_RANGE.MAX} 이하여야한다.`, () => {
    expect(() => new DrawnLotto([1, 2, 3, 4, 5, 6], 90)).toThrow(
      LottoError.PREFIX
    );
  });

  test("DrawnLotto의 numbers와 bonusNumber를 객체로 리턴해야한다", () => {
    expect(
      new DrawnLotto(["1", "2", "3", "4", "5", "6"], "7").getFullNumbers()
    ).toEqual({
      numbers: [1, 2, 3, 4, 5, 6],
      bonusNumber: 7,
    });
  });
});
