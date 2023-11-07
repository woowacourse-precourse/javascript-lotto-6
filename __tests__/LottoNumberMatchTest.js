import LottoNumberMatch from "../src/Domain/LottoNumberMatch.js";

describe("로또 번호 일치 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    const PURCHASED_ARRAY = [
      [1, 2, 3, 4, 5, 6],
      [5, 6, 7, 8, 9, 0],
      [1, 3, 5, 7, 9, 11],
    ];
    const LOTTO_NUMBER_ARRAY = [1, 3, 5, 7, 9, 11];
    const LOTTO_NUMBER_MATCH = new LottoNumberMatch();
    expect(
      LOTTO_NUMBER_MATCH.matchResult(PURCHASED_ARRAY, LOTTO_NUMBER_ARRAY, 8)
    ).toEqual([2, 0, 0, 0, 1]);
  });
});
