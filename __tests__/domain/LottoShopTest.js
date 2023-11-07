import { LOTTO_PRICE } from '../../src/constants/setting';
import LottoShop from '../../src/domain/LottoShop';

describe('로또샵 클래스 구매 테스트', () => {
  test.each([
    [1000, 1000 / LOTTO_PRICE],
    [8000, 8000 / LOTTO_PRICE],
    [12000, 12000 / LOTTO_PRICE],
  ])('로또 %d원치 구매시 %d개의 로또가 발급된다.', (money, lottoCount) => {
    const lottos = LottoShop.purchaseLotto(money);

    expect(lottos.length).toBe(lottoCount);
  });
});
