import LottoStatistics from '../src/LottoStatistics';
import Lotto from '../src/Lotto';

describe('LottoStatistics test', () => {
  test('수익률을 계산을 테스트한다.', () => {
    const paymentAmount = 6000;
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 8;
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([2, 3, 4, 5, 6, 7]),
      new Lotto([3, 4, 5, 6, 7, 8]),
      new Lotto([4, 5, 6, 7, 8, 9]),
      new Lotto([1, 2, 3, 4, 5, 8]),
      new Lotto([6, 7, 8, 9, 10, 11]),
    ];
    const earningRate = new LottoStatistics(
      paymentAmount,
      winningNumbers,
      bonusNumber,
      lottos
    );
    const result =
      ((2000000000 + 30000000 + 1500000 + 50000 + 5000) / paymentAmount) * 100;
    expect(earningRate.getEarningRate()).toStrictEqual(result.toFixed(1));
  });
});
