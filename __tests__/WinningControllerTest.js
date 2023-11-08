import WinningController from '../src/controller/WinningController';
import PurchasedLotto from '../src/model/PurchasedLotto';

describe('당첨 컨트롤러 테스트', () => {
  const purchaseAmount = '5000';
  const winningNumbers = ['40', '41', '42', '43', '44', '45'];
  const bonusNumber = '39';
  const purchasedLottos = [
    new PurchasedLotto([1, 2, 3, 40, 41, 42]),
    new PurchasedLotto([1, 2, 40, 41, 42, 43]),
    new PurchasedLotto([1, 40, 41, 42, 43, 44]),
    new PurchasedLotto([39, 40, 41, 42, 43, 44]),
    new PurchasedLotto([40, 41, 42, 43, 44, 45]),
  ];

  const controller = new WinningController(
    purchaseAmount,
    winningNumbers,
    bonusNumber,
    purchasedLottos
  );

  test('로또 별 일치 개수 구하기', () => {
    const numberCountOutput = [3, 4, 5, 5, 6];
    const bonusCountOutput = [0, 0, 0, 1, 0];

    expect(
      controller.getPurchaseLottos().every((pLotto, index) => {
        return (
          pLotto.getMatchedNumberCount() === numberCountOutput[index] &&
          pLotto.getMatchedBonusCount() === bonusCountOutput[index]
        );
      })
    ).toBe(true);
  });

  test('전체 로또 당첨 내역 구하기', () => {
    const winningCountOutput = [0, 0, 0, 1, 1, 1, 1];
    const win5andBonusOutput = 1;

    expect(controller.getWinningCount()).toEqual(winningCountOutput);
    expect(controller.getWin5andBonus()).toEqual(win5andBonusOutput);
  });

  test('수익률 구하기', () => {
    const profitRateOutput = 40631100;

    expect(controller.getProfitRate()).toEqual(profitRateOutput);
  });
});
