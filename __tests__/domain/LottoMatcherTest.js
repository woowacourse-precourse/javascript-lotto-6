import LottosMatcher from '../../src/domain/LottosMatcher.js';
import LottoShop from '../../src/domain/LottoShop.js';
import Lotto from '../../src/domain/Lotto.js';
import Money from '../../src/domain/Money.js';
import LottoNumber from '../../src/domain/LottoNumber.js';
import { mockRandoms } from '../ApplicationTest.js';

describe('로또 매치 결과 테스트', () => {
  mockRandoms([
    [1, 2, 3, 4, 5, 6],
    [4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 7]
  ]);

  const money = new Money(3000);
  const lottos = LottoShop.buyLottos(money);
  const lottosMatcher = new LottosMatcher();

  test('3개 매치 테스트', async () => {
    const winningLotto = new Lotto([1, 2, 3, 10, 11, 12]);
    const bonusNumber = new LottoNumber(7);
    // when
    const prizeCount = lottosMatcher.calcPrizeCount(lottos, winningLotto, bonusNumber);
    // then

    expect(prizeCount).toEqual([2, 0, 0, 0, 0]);
  });

  test('4개 매치 테스트', async () => {
    const winningLotto = new Lotto([1, 2, 3, 4, 10, 11]);
    const bonusNumber = new LottoNumber(7);
    // when
    const prizeCount = lottosMatcher.calcPrizeCount(lottos, winningLotto, bonusNumber);
    // then

    expect(prizeCount).toEqual([0, 2, 0, 0, 0]);
  });

  test('5개 매치 테스트', async () => {
    const winningLotto = new Lotto([1, 2, 3, 4, 5, 10]);
    const bonusNumber = new LottoNumber(11);
    // when
    const prizeCount = lottosMatcher.calcPrizeCount(lottos, winningLotto, bonusNumber);
    // then

    expect(prizeCount).toEqual([0, 0, 2, 0, 0]);
  });

  test('보너스 매치 테스트', async () => {
    const winningLotto = new Lotto([4, 5, 6, 7, 8, 10]);
    const bonusNumber = new LottoNumber(9);
    // when
    const prizeCount = lottosMatcher.calcPrizeCount(lottos, winningLotto, bonusNumber);
    // then

    expect(prizeCount).toEqual([2, 0, 0, 1, 0]);
  });

  test('우승 매치 테스트', async () => {
    const winningLotto = new Lotto([4, 5, 6, 7, 8, 9]);
    const bonusNumber = new LottoNumber(10);
    // when
    const prizeCount = lottosMatcher.calcPrizeCount(lottos, winningLotto, bonusNumber);
    // then

    expect(prizeCount).toEqual([2, 0, 0, 0, 1]);
  });
});
