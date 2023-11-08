import LottoGame from "../src/lottoGame/LottoGame";

describe("수익률 테스트", () => {
  test("우승자 없음", () => {
    const lottoGame = new LottoGame();
    lottoGame.generateRandomLotto(1000);
    lottoGame.generateWinnigLotto([1, 2, 3, 4, 5, 6]);
    lottoGame.setLottoBonusNumber(7);

    const profitRate = lottoGame.calculateProfitRate();

    expect(profitRate).toBe(0);
  });

  test("5등 당첨", () => {
    const lottoGame = new LottoGame();
    lottoGame.generateRandomLotto(1000);
    lottoGame.generateWinnigLotto([1, 2, 3, 4, 5, 6]);
    lottoGame.setLottoBonusNumber(7);

    lottoGame.updateRank([1, 2, 3], [1, 2, 3, 4, 5, 6]);

    const profitRate = lottoGame.calculateProfitRate();

    const expectedProfitRate = (5000 / 1000) * 100;

    expect(profitRate).toBe(expectedProfitRate);
  });

  test("4등 당첨", () => {
    const lottoGame = new LottoGame();
    lottoGame.generateRandomLotto(1000);
    lottoGame.generateWinnigLotto([1, 2, 3, 4, 5, 6]);
    lottoGame.setLottoBonusNumber(7);

    lottoGame.updateRank([1, 2, 3, 4], [1, 2, 3, 4, 5, 6]);

    const profitRate = lottoGame.calculateProfitRate();

    const expectedProfitRate = (50000 / 1000) * 100;

    expect(profitRate).toBe(expectedProfitRate);
  });

  test("3등 당첨", () => {
    const lottoGame = new LottoGame();
    lottoGame.generateRandomLotto(1000);
    lottoGame.generateWinnigLotto([1, 2, 3, 4, 5, 6]);
    lottoGame.setLottoBonusNumber(7);

    lottoGame.updateRank([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]);

    const profitRate = lottoGame.calculateProfitRate();

    const expectedProfitRate = (1500000 / 1000) * 100;

    expect(profitRate).toBe(expectedProfitRate);
  });

  test("2등 당첨", () => {
    const lottoGame = new LottoGame();
    lottoGame.generateRandomLotto(1000);
    lottoGame.generateWinnigLotto([1, 2, 3, 4, 5, 6]);
    lottoGame.setLottoBonusNumber(7);

    lottoGame.updateRank([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 7]);

    const profitRate = lottoGame.calculateProfitRate();

    const expectedProfitRate = (30000000 / 1000) * 100;

    expect(profitRate).toBe(expectedProfitRate);
  });

  test("1등 당첨", () => {
    const lottoGame = new LottoGame();
    lottoGame.generateRandomLotto(1000);
    lottoGame.generateWinnigLotto([1, 2, 3, 4, 5, 6]);
    lottoGame.setLottoBonusNumber(7);

    lottoGame.updateRank([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);

    const profitRate = lottoGame.calculateProfitRate();

    const expectedProfitRate = (2000000000 / 1000) * 100;

    expect(profitRate).toBe(expectedProfitRate);
  });

  test("3등+4등 당첨", () => {
    const lottoGame = new LottoGame();
    lottoGame.generateRandomLotto(2000);
    lottoGame.generateWinnigLotto([1, 2, 3, 4, 5, 6]);
    lottoGame.setLottoBonusNumber(7);

    lottoGame.updateRank([1, 2, 3, 4], [1, 2, 3, 4, 5, 6]);
    lottoGame.updateRank([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]);

    const profitRate = lottoGame.calculateProfitRate();

    const expectedProfitRate = ((50000 + 1500000) / 2000) * 100;

    expect(profitRate).toBe(expectedProfitRate);
  });
});
