import LottoBundle from "../../../src/lib/Domain/LottoBundle";
import ReferenceLotto from "../../../src/lib/Domain/ReferenceLotto";
import { GAME_RULE } from "../../../src/lib/Constants";
import { mockRandoms } from "../../ApplicationTest";

describe("ReferenceLotto.calcResult", () => {
  test.each([
    [[7, 8, 9, 10, 11, 12], [1, 2, 3, 4, 5, 6], 7, new Map([[6, 1]]), 0],
    [[1, 7, 8, 9, 10, 11], [1, 2, 3, 4, 5, 6], 7, new Map([[6, 1]]), 0],
    [[1, 7, 8, 9, 10, 11], [1, 2, 3, 4, 5, 6], 7, new Map([[6, 1]]), 0],
    [[1, 2, 8, 9, 10, 11], [1, 2, 3, 4, 5, 6], 7, new Map([[6, 1]]), 0],
    [[1, 2, 3, 9, 10, 11], [1, 2, 3, 4, 5, 6], 7, new Map([[5, 1]]), 500],
    [[1, 2, 3, 4, 10, 11], [1, 2, 3, 4, 5, 6], 7, new Map([[4, 1]]), 5000],
    [[1, 2, 3, 4, 5, 11], [1, 2, 3, 4, 5, 6], 7, new Map([[3, 1]]), 150000],
    [[1, 2, 3, 4, 5, 7], [1, 2, 3, 4, 5, 6], 7, new Map([[2, 1]]), 3000000],
    [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], 7, new Map([[1, 1]]), 200000000],
  ])(
    "로또 번호(%s), 당첨 번호(%s), 보너스 번호(%s)가 주어졌을 때, 등수 결과는 %s와 같고, 수익률은 %s와 같아야 한다.",
    (randoms, numbers, bonusNumber, expectedPrizeMap, expectedWinRate) => {
      // when
      mockRandoms([randoms]);
      const lottoBundle = new LottoBundle(GAME_RULE.LOTTO_PRICE);
      const referenceLotto = new ReferenceLotto(numbers);
      referenceLotto.bonus = bonusNumber;
      const result = referenceLotto.calcResult(lottoBundle.items);
      // then
      expect(result.prizeMap).toEqual(expectedPrizeMap);
      expect(result.winRate).toEqual(expectedWinRate);
    },
  );

  test("여러 장의 로또가 주어질 때, 결과를 계산할 수 있어야 한다.", () => {
    // given
    const randoms = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 7, 8, 9],
      [2, 34, 35, 43, 44, 45],
    ];
    mockRandoms(randoms);
    const numbers = [1, 2, 3, 4, 5, 6];
    const bonus = 7;
    const referenceLotto = new ReferenceLotto(numbers);
    referenceLotto.bonus = bonus;

    // when
    const lottoBundle = new LottoBundle(randoms.length * GAME_RULE.LOTTO_PRICE);
    const result = referenceLotto.calcResult(lottoBundle.items);

    // then
    const expectedPrizeMap = new Map([
      [1, 1],
      [5, 1],
      [6, 1],
    ]);
    const expectedWinRate = 66666833.333333336;
    const expected = { prizeMap: expectedPrizeMap, winRate: expectedWinRate };
    expect(result).toEqual(expected);
  });
});

describe("ReferenceLotto.calcResult - 예외", () => {
  test("bonus가 없는 상태의 레퍼런스 로또에서 결과를 계산하려고 할 때, 에러를 발생시켜야 한다.", () => {
    const referenceLotto = new ReferenceLotto([1, 2, 3, 4, 5, 6]);
    const randoms = [[1, 2, 3, 4, 5, 6]];
    mockRandoms(randoms);
    const lottoBundle = new LottoBundle(1000);

    expect(() => {
      referenceLotto.calcResult(lottoBundle);
    }).toThrow("[ERROR]");
  });
});

describe("ReferenceLotto.setBonus- 예외", () => {
  test("bonus가 있는 상태의 레퍼런스 로또에 다시 보너스를 설정하려고 할 때, 에러를 발생시켜야 한다.", () => {
    const referenceLotto = new ReferenceLotto([1, 2, 3, 4, 5, 6]);
    referenceLotto.bonus = 7;
    expect(() => {
      referenceLotto.bonus = 8;
    }).toThrow("[ERROR]");
  });
});
