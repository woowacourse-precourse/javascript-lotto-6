import { matchRank } from "../src/utils/lotto.js";

describe("utils/lotto - matchRank 함수 테스트", () => {
  test("올바르게 등수를 출력한다.", () => {
    // given
    const result = {
      fifth: { count: 3, prize: 5000, matched: 0 },
      fourth: { count: 4, prize: 50000, matched: 0 },
      third: { count: 5, bonus: false, prize: 1500000, matched: 0 },
      second: { count: 5, bonus: true, prize: 30000000, matched: 0 },
      first: { count: 6, prize: 2000000000, matched: 0 },
    };
    const lottoMatched = 5;
    const bonusMatched = true;

    // when
    matchRank(result, lottoMatched, bonusMatched);

    // then
    expect(result["second"].matched).toEqual(1);
  });
});
