import LottoController from '../src/controller/LottoController.js';

describe('로또 컨트롤러 테스트', () => {
  test('구입 금액에 따른 로또 개수 반환', () => {
    const lottoController = new LottoController();
    const money = '5000';

    const lottoCount = lottoController.calculateLottoCount(money);

    expect(lottoCount).toBe(5);
  });
});
