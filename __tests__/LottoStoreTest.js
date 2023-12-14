import Lotto from '../src/Lotto';
import LottoStore from '../src/domains/LottoStore';

describe('LottoStore 클래스 테스트', () => {
  // given
  let lottoStore;

  beforeEach(() => {
    lottoStore = new LottoStore();
  });

  test('구매 수량에 문자가 포함된 경우 예외가 발생한다.', () => {
    // when, then
    expect(() => {
      lottoStore.generateLottos('ab10');
    }).toThrow('[ERROR]');
  });

  test('구매 수량이 로또 하나의 가격으로 나누어 떨어지지 않는 경우 예외가 발생한다.', () => {
    // when, then
    expect(() => {
      lottoStore.generateLottos(1200);
    }).toThrow('[ERROR]');
  });

  test('로또 구매 수량만큼 로또를 생성한다', () => {
    // given
    const lottos = lottoStore.generateLottos(5000);

    // then
    expect(lottos.length).toBe(5);
    lottos.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Lotto);
    });
  });
});
