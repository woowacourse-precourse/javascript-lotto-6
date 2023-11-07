import Lotto from "../../../src/Lotto";
import ReferenceLotto from "../../../src/lib/Domain/ReferenceLotto";

describe("Lotto.caclPrize", () => {
  test.each([
    [[7, 8, 9, 10, 11, 12], [1, 2, 3, 4, 5, 6], 7, 6],
    [[1, 7, 8, 9, 10, 11], [1, 2, 3, 4, 5, 6], 7, 6],
    [[1, 7, 8, 9, 10, 11], [1, 2, 3, 4, 5, 6], 7, 6],
    [[1, 2, 8, 9, 10, 11], [1, 2, 3, 4, 5, 6], 7, 6],
    [[1, 2, 3, 9, 10, 11], [1, 2, 3, 4, 5, 6], 7, 5],
    [[1, 2, 3, 4, 10, 11], [1, 2, 3, 4, 5, 6], 7, 4],
    [[1, 2, 3, 4, 5, 11], [1, 2, 3, 4, 5, 6], 7, 3],
    [[1, 2, 3, 4, 5, 7], [1, 2, 3, 4, 5, 6], 7, 2],
    [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], 7, 1],
  ])(
    "로또 번호(%s), 당첨 번호(%s), 보너스 번호(%s)가 주어졌을 때, 등수 결과는 %s등과 같아야 한다.",
    (purchased, numbers, bonusNumber, expected) => {
      // given
      const lotto = new Lotto(purchased);
      const referenceLotto = new ReferenceLotto(numbers);
      referenceLotto.bonus = bonusNumber;
      // when
      const prize = lotto.calcPrize(referenceLotto);
      // then
      expect(prize).toEqual(expected);
    },
  );
});
