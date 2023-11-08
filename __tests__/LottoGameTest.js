import Lotto from '../src/Lotto.js';
import LottoGame from '../src/LottoGame.js';

describe('로또 게임 테스트', () => {
  test('당첨 번호와 일치하는 숫자 배열 반환', () => {
    const lottoGame = new LottoGame(3000);
    for (let i = 0; i < lottoGame.count; i++) {
      lottoGame.addLotto(new Lotto([1, 2, 3, 4, 5, 6]));
    }
    lottoGame.addWinningNumbers('1,2,3,4,5,6');
    lottoGame.addBonusNumber(9);

    lottoGame.calculateLottoResult();
    expect(lottoGame.first).toBe(3);
  });

  test('보너스 넘버가 포함되어있는지 검사', () => {
    const lottoGame = new LottoGame(1000);
    lottoGame.addBonusNumber(1);
    lottoGame.checkBonusNumber([1, 2, 3, 4, 5, 6]);
    expect(lottoGame.seccond).toBe(1);
  });

  test('당첨 숫자만 포함된 2차원 배열을 반환하는지 검사', () => {
    const lottoGame = new LottoGame(5000);

    lottoGame.addWinningNumbers('1,2,3,4,5,6');
    lottoGame.addBonusNumber(9);

    // 1등
    lottoGame.addLotto(new Lotto([1, 2, 3, 4, 5, 6]));
    // 2등
    lottoGame.addLotto(new Lotto([1, 2, 3, 4, 5, 9]));
    // 3등
    lottoGame.addLotto(new Lotto([1, 2, 3, 4, 5, 20]));
    // 4등
    lottoGame.addLotto(new Lotto([1, 2, 3, 4, 10, 20]));
    // 5등
    lottoGame.addLotto(new Lotto([1, 2, 3, 10, 20, 30]));

    expect(lottoGame.calculateResultArray()).toStrictEqual([
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 9],
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4],
      [1, 2, 3],
    ]);
  });

  test('5, 4, 3, 2, 1 등이 한장씩 있을 경우', () => {
    const lottoGame = new LottoGame(5000);

    lottoGame.addWinningNumbers('1,2,3,4,5,6');
    lottoGame.addBonusNumber(9);

    // 1등
    lottoGame.addLotto(new Lotto([1, 2, 3, 4, 5, 6]));
    // 2등
    lottoGame.addLotto(new Lotto([1, 2, 3, 4, 5, 9]));
    // 3등
    lottoGame.addLotto(new Lotto([1, 2, 3, 4, 5, 20]));
    // 4등
    lottoGame.addLotto(new Lotto([1, 2, 3, 4, 10, 20]));
    // 5등
    lottoGame.addLotto(new Lotto([1, 2, 3, 10, 20, 30]));

    lottoGame.calculateLottoResult();
    lottoGame.calculateLottoPrize();

    expect(lottoGame.first).toBe(1);
    expect(lottoGame.seccond).toBe(1);
    expect(lottoGame.third).toBe(1);
    expect(lottoGame.fourth).toBe(1);
    expect(lottoGame.fifth).toBe(1);

    expect(lottoGame.price).toBe(5000);
    expect(5000 + 50000 + 1500000 + 30000000 + 2000000000).toBe(2031555000);
    expect(lottoGame.lottoPrize).toBe(2031555000);
    expect(
      lottoGame.calculateProfitability(lottoGame.price, lottoGame.lottoPrize),
    ).toBe(lottoGame.calculateProfitability(5000, 2031555000));
  });

  test('application test 검증', () => {
    const lottoGame = new LottoGame(8000);

    lottoGame.addWinningNumbers('1,2,3,4,5,6');
    lottoGame.addBonusNumber(7);

    // 1등
    lottoGame.addLotto(new Lotto([8, 21, 23, 41, 42, 43]));
    // 2등
    lottoGame.addLotto(new Lotto([3, 5, 11, 16, 32, 38]));
    // 3등
    lottoGame.addLotto(new Lotto([7, 11, 16, 35, 36, 44]));
    // 4등
    lottoGame.addLotto(new Lotto([1, 8, 11, 31, 41, 42]));
    // 5등
    lottoGame.addLotto(new Lotto([13, 14, 16, 38, 42, 45]));
    lottoGame.addLotto(new Lotto([7, 11, 30, 40, 42, 43]));
    lottoGame.addLotto(new Lotto([2, 13, 22, 32, 38, 45]));
    lottoGame.addLotto(new Lotto([1, 3, 5, 14, 22, 45]));
    lottoGame.calculateLottoResult();
    lottoGame.calculateLottoPrize();

    expect(lottoGame.first).toBe(0);
    expect(lottoGame.seccond).toBe(0);
    expect(lottoGame.third).toBe(0);
    expect(lottoGame.fourth).toBe(0);
    expect(lottoGame.fifth).toBe(1);

    expect(lottoGame.price).toBe(8000);

    expect(
      lottoGame.calculateProfitability(lottoGame.price, lottoGame.lottoPrize),
    ).toBe(62.5);
  });
});
