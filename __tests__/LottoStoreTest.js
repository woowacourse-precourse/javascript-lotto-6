import LottoStore from '../src/domains/LottoStore';
import Lotto from '../src/domains/Lotto';

// TODO : LottoStore 도메인 로직 테스트
// LottoStore는 어떤 "도메인 로직" 인가? -> 현실에서의 로또 판매점을 표현하는 클래스
// - 로또 구매 수량에 대한 유효성을 검증한다
// - 로또 구매 수량만큼 로또를 생성한다

// - beforeEach를 사용할만 한 곳이 있나? -> 각 테스트가 시작되기 전 lottoStore 인스턴스를 생성한다.

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
