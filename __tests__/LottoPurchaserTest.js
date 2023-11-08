import Lotto from '../src/Lotto.js';
import LottoPurchaser from '../src/LottoPurchaser.js';
import WinningLotto from '../src/WinningLotto.js';
import WinningResults from '../src/WinningResults.js';

describe('로또 구매자 클래스 테스트', () => {
  const lottoPurchaser = new LottoPurchaser(new WinningResults());
  const lottos = [
    new Lotto([8, 21, 23, 41, 42, 43]),
    new Lotto([3, 5, 11, 16, 32, 38]),
    new Lotto([7, 11, 16, 35, 36, 44]),
    new Lotto([1, 8, 11, 31, 41, 42]),
    new Lotto([13, 14, 16, 38, 42, 45]),
    new Lotto([7, 11, 30, 40, 42, 43]),
    new Lotto([2, 13, 22, 32, 38, 45]),
    new Lotto([1, 3, 5, 14, 22, 45]),
  ];
  const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7);

  lottoPurchaser.purchase(lottos);
  lottoPurchaser.check(winningLotto);

  test('getLottoCount', () => {
    expect(lottoPurchaser.getLottoCount()).toBe(8);
  });

  test('getLottos', () => {
    const answer = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];

    expect(lottoPurchaser.getLottos()).toStrictEqual(answer);
  });

  test('getWinningResults', () => {
    const answer = [
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 1],
    ];

    expect(lottoPurchaser.getWinningResults()).toStrictEqual(answer);
  });

  test('getProfitRate', () => {
    expect(lottoPurchaser.getProfitRate()).toBe(62.5);
  });
});
