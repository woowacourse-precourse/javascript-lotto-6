import Lotto from '../../src/domain/Lotto.js';
import LottoNumber from '../../src/domain/LottoNumber.js';
import LottoShop from '../../src/domain/LottoShop.js';
import LottoYieldCalculator from '../../src/domain/LottoYieldCalculator.js';
import LottosMatcher from '../../src/domain/LottosMatcher.js';
import Money from '../../src/domain/Money.js';
import { mockRandoms } from '../ApplicationTest.js';

describe('로또 수익률 계산기 테스트', () => {
  mockRandoms([
    [1, 2, 3, 4, 5, 6],
    [4, 5, 6, 7, 8, 9]
  ]);

  const money = new Money(2000);
  const lottos = LottoShop.buyLottos(money);
  const bonusNumber = new LottoNumber(10);

  const lottosMatcher = new LottosMatcher();
  

  test('올바르게 수익률을 계산하는지 테스트1', () => {
    const winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const prizeCount = lottosMatcher.calcPrizeCount(lottos, winningLotto, bonusNumber)
    const yieldRate = LottoYieldCalculator.getYieldRate(money, prizeCount);

    expect(yieldRate).toEqual(100000250)
  });

  test('올바르게 수익률을 계산하는지 테스트2', () => {
    const winningLotto = new Lotto([10, 11, 12, 1, 2, 3]);
    const prizeCount = lottosMatcher.calcPrizeCount(lottos, winningLotto, bonusNumber)
    const yieldRate = LottoYieldCalculator.getYieldRate(money, prizeCount);

    expect(yieldRate).toEqual(250)
  });

  test('당첨이 안된경우 수익률 테스트', () => {
    const winningLotto = new Lotto([11, 12, 13, 14, 15, 16]);
    const prizeCount = lottosMatcher.calcPrizeCount(lottos, winningLotto, bonusNumber)
    const yieldRate = LottoYieldCalculator.getYieldRate(money, prizeCount);

    expect(yieldRate).toEqual(0)
  });

});
