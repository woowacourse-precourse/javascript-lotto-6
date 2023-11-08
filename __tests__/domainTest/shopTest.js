import Lotto from '../../src/Lotto';
import shop from '../../src/domain/shop';

describe('shop 테스트', () => {
  const money = 3000;
  const lottos = shop.lotterySales(money);

  test('판매함수 반환값이 배열인지 체크', () => {
    expect(Array.isArray(lottos)).toBe(true);
  });

  test('판매함수의 반환값의 원소들의 타입이 Lotto클래스인지 체크', () => {
    lottos.forEach((lotto) => expect(lotto).toBeInstanceOf(Lotto));
  });

  test('로또 뽑은 수 중에 중복이 있는지 테스트', () => {
    const random = shop.drawLottoNumbers();
    const set = new Set(random);
    expect(set.size).toBe(random.length);
  });
});
