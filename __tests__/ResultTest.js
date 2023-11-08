import Result from "../src/model/Result";

describe("로또 당첨 결과 테스트", () => {
  describe("당첨 번호, 보너스 번호, 내 번호로 당첨 여부 조회", () => {
    it("1등 1개, 2등 2개, 3등 1개, 4등 1개, 5등 1개", () => {
      const result = new Result();
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = [7];
      const myLotto = [
        [1, 2, 3, 4, 5, 6], // 1등
        [1, 2, 3, 4, 5, 7], // 2등
        [2, 3, 4, 5, 6, 7], // 2등
        [1, 2, 3, 4, 5, 8], // 3등
        [3, 4, 5, 6, 7, 8], // 4등
        [4, 5, 6, 7, 8, 9], // 5등
      ];

      result.getMatchingNumbersCount(winningNumbers, bonusNumber, myLotto);

      expect(result.first).toBe(1);
      expect(result.second).toBe(2);
      expect(result.third).toBe(1);
      expect(result.third).toBe(1);
      expect(result.third).toBe(1);
    });

    it("미당첨", () => {
      const result = new Result();
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = [7];
      const myLotto = [
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
      ];

      result.getMatchingNumbersCount(winningNumbers, bonusNumber, myLotto);

      expect(result.first).toBe(0);
      expect(result.second).toBe(0);
      expect(result.third).toBe(0);
      expect(result.fourth).toBe(0);
      expect(result.fifth).toBe(0);
    });
  });
});

describe("로또 수익률 결과 테스트", () => {
  const result = new Result();

  result.fourth = 1;
  result.third = 1;
  const purchase = 1000000;

  const profitMargin = result.getProfitMargin(purchase);

  expect(profitMargin).toBe("155.0");
});
