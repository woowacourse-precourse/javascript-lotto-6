import LottoController from '../../src/controller/LottoController';
import { LOTTO_PRICE } from '../../src/constants/setting';
import LottoShop from '../../src/domain/LottoShop';
import Lotto from '../../src/domain/Lotto';

describe('LottoController 클래스 테스트', () => {
  describe('로또 발급 테스트', () => {
    test.each([
      [1000, 1000 / LOTTO_PRICE],
      [8000, 8000 / LOTTO_PRICE],
      [12000, 12000 / LOTTO_PRICE],
    ])('로또 %d원치 구매시 %d개의 로또 발급', (money, lottoCount) => {
      LottoShop.generateLotto = jest.fn(() => new Lotto([1, 2, 3, 4, 5, 6]));
      const lottoController = new LottoController(money);

      expect(LottoShop.generateLotto).toHaveBeenCalledTimes(lottoCount);
    });
  });
});
