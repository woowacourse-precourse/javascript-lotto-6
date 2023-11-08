import DongHang from '../src/DongHang';
import Lotto from '../src/Lotto';

describe('DongHang 클래스 테스트', () => {
  describe('issue 메서드 테스트', () => {
    test('주어진 개수만큼 Lotto 인스턴스를 반환해야한다.', () => {
      // given
      const lottoCount = 5000;

      // when
      const lottos = DongHang.issue(lottoCount);

      // then
      expect(lottos).toBeInstanceOf(Array);
      expect(lottos.length).toBe(5);
      lottos.forEach((lotto) => {
        expect(lotto).toBeInstanceOf(Lotto);
      });
    });
  });

  describe('issueOne 메서드 테스트', () => {
    it('Lotto인스턴스를 하나 반환해야한다.', () => {
      // given
      // when
      const lotto = DongHang.issueOne();

      // then
      expect(lotto).toBeInstanceOf(Lotto);
    });
  });
});
