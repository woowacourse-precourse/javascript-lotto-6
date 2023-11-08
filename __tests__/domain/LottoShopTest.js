import LottoShop from '../../src/domain/LottoShop.js';
import Money from '../../src/domain/Money.js';

describe('로또 클래스 테스트', () => {
  test('로또가 금액만큼 구매되는지 테스트', () => {
    const money = new Money(24000);
    const lottos = LottoShop.buyLottos(money);

    expect(lottos.length).toEqual(24);
  });
});
