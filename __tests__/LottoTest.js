import Lotto from "../src/domain/Lotto";
import { RANK } from "../src/static/Static";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("주어진 로또 번호의 당첨 번호와의 일치 갯수를 반환한다.", () => {
    // given
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    // when
    const matchedCount = lotto.countMatchedNums([1, 2, 3, 4, 5, 6]);

    // then
    expect(matchedCount).toBe(6);
  });

  test("주어진 로또 번호의 보너스 번호 포함 여부를 반환한다.", () => {
    // given
    const lottoBonusIncluded = new Lotto([1, 2, 3, 4, 5, 6]);

    // when
    const isBonusNumIncluded = lottoBonusIncluded.isBonusNumIncluded(6);

    // then
    expect(isBonusNumIncluded).toBeTruthy();
  });

  test("주어진 로또 번호의 최종 결과를 반환한다.", () => {
    // given
    const lotto2 = new Lotto([1, 2, 3, 4, 5, 6]);
    const matchedCount2 = lotto2.countMatchedNums([2, 3, 4, 5, 6, 7]);
    const isBonusNumIncluded2 = lotto2.isBonusNumIncluded(1);

    // when
    const result = lotto2.getRank(matchedCount2, isBonusNumIncluded2);

    // then
    expect(result).toBe(RANK.second);
  });
});
