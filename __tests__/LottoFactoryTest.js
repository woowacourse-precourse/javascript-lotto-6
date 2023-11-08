import Lotto from '../src/domain/Lotto';
import LottoFactory from '../src/domain/LottoFactory';

describe('LottoFactory 클래스 테스트', () => {
  test('랜덤한 로또를 한 장 생성할 수 있다.', () => {
    // given
    const lottoFactory = new LottoFactory();

    // when
    const lotto = lottoFactory.generateLotto();
    // then
    expect(lotto).toBeInstanceOf(Lotto);
  });
});
