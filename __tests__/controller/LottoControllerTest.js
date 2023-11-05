import LottoController from '../../src/controller/LottoController';
import { LOTTO } from '../../src/constants/setting';

describe('LottoController 클래스 테스트', () => {
  test.each([
    [1000, 1000 / LOTTO.price],
    [8000, 8000 / LOTTO.price],
    [12000, 12000 / LOTTO.price],
  ])('로또 %d원치 구매시 %d개의 로또 발급', (money, lottoCount) => {
    const lottoController = new LottoController(money);

    lottoController.issueLotto = jest.fn();

    lottoController.purchaseLotto();
    expect(lottoController.issueLotto).toHaveBeenCalledTimes(lottoCount);
  });
});
