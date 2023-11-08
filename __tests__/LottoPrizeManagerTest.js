import LottoPrizeManager from "../src/LottoPrizeManager.js";

describe("LottoPrizeManager 클래스 테스트", () => {
  test.each([
    ["FIRST", [1, 2, 3, 4, 5, 6]],
    ["SECOND", [1, 2, 3, 4, 5, 7]],
    ["THIRD", [1, 2, 3, 4, 5, 8]],
    ["FOURTH", [1, 2, 3, 4, 8, 9]],
    ["FIFTH", [1, 2, 3, 8, 9, 10]],
  ])(
    "당첨 번호와 보너스 번호를 로또 번호와 비교해 등수를 반환한다 - %s",
    (expectedRank, numberArray) => {
      const defaultResult = {
        FIRST: 0,
        SECOND: 0,
        THIRD: 0,
        FOURTH: 0,
        FIFTH: 0,
      };

      const prizeManager = new LottoPrizeManager();

      const result = prizeManager.calculateAllLottoRank({
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 7,
        lottoArray: [numberArray],
      });

      defaultResult[expectedRank]++;
      expect(result).toEqual(defaultResult);
    }
  );

  test("로또의 수익률 계산", () => {
    const rankResult = { FIRST: 0, SECOND: 0, THIRD: 0, FOURTH: 0, FIFTH: 1 };

    expect(
      LottoPrizeManager.calculateProfitRate({ rankResult, totalMoney: 8000 })
    ).toBe("62.5");
  });
});
