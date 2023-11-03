import LottoError from "../../src/Error/LottoError";
import DrawnLotto from "../../src/Models/DrawnLotto";

describe("DrawnLotto 클래스 테스트", () => {
  test("당첨번호와 보너스 번호가 중복되면 에러 처리해야한다.", () => {
    expect(() => new DrawnLotto([1, 2, 3, 4, 5, 6], 6)).toThrow(
      LottoError.PREFIX
    );
  });
});
