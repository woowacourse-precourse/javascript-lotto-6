import LottoResult from '../src/LottoResult';

describe('LottoResult 클래스 테스트', () => {
  const winningNumbers = {
    mainMatchCount: 5,
    isBonusMatched: false,
  };

  describe('getPrize 메서드 테스트', () => {
    test('1등일 경우 20억원을 반환한다.', () => {
      // given
      const lottoResult = new LottoResult({
        mainMatchCount: 6,
        isBonusMatched: false,
      });

      // when
      const result = lottoResult.getPrize();

      // then
      expect(result).toBe(2000000000);
    });

    test('2등일 경우 3천만원을 반환한다.', () => {
      // given
      const lottoResult = new LottoResult({
        mainMatchCount: 5,
        isBonusMatched: true,
      });

      // when
      const result = lottoResult.getPrize();

      // then
      expect(result).toBe(30000000);
    });

    test('3등일 경우 1백오십만원을 반환한다.', () => {
      // given
      const lottoResult = new LottoResult({
        mainMatchCount: 5,
        isBonusMatched: false,
      });

      // when
      const result = lottoResult.getPrize();

      // then
      expect(result).toBe(1500000);
    });

    test('4등일 경우 5만원을 반환한다.', () => {
      // given
      const lottoResult = new LottoResult({
        mainMatchCount: 4,
        isBonusMatched: false,
      });

      // when
      const result = lottoResult.getPrize();

      // then
      expect(result).toBe(50000);
    });

    test('5등일 경우 5천원을 반환한다.', () => {
      // given
      const lottoResult = new LottoResult({
        mainMatchCount: 3,
        isBonusMatched: false,
      });

      // when
      const result = lottoResult.getPrize();

      // then
      expect(result).toBe(5000);
    });
  });

  describe('getRank 메서드 테스트', () => {
    test('1등일 경우 4를 반환한다.', () => {
      // given
      const lottoResult = new LottoResult({
        mainMatchCount: 6,
        isBonusMatched: false,
      });

      // when
      const result = lottoResult.getRank();

      // then
      expect(result).toBe(4);
    });

    test('2등일 경우 3를 반환한다.', () => {
      // given
      const lottoResult = new LottoResult({
        mainMatchCount: 5,
        isBonusMatched: true,
      });

      // when
      const result = lottoResult.getRank();

      // then
      expect(result).toBe(3);
    });

    test('3등일 경우 2를 반환한다.', () => {
      // given
      const lottoResult = new LottoResult({
        mainMatchCount: 5,
        isBonusMatched: false,
      });

      // when
      const result = lottoResult.getRank();

      // then
      expect(result).toBe(2);
    });

    test('4등일 경우 1를 반환한다.', () => {
      // given
      const lottoResult = new LottoResult({
        mainMatchCount: 4,
        isBonusMatched: false,
      });

      // when
      const result = lottoResult.getRank();

      // then
      expect(result).toBe(1);
    });

    test('5등일 경우 0를 반환한다.', () => {
      // given
      const lottoResult = new LottoResult({
        mainMatchCount: 3,
        isBonusMatched: false,
      });

      // when
      const result = lottoResult.getRank();

      // then
      expect(result).toBe(0);
    });

    test('당첨되지 않은 경우 -1를 반환한다.', () => {
      // given
      const lottoResult = new LottoResult({
        mainMatchCount: 2,
        isBonusMatched: false,
      });

      // when
      const result = lottoResult.getRank();

      // then
      expect(result).toBe(-1);
    });
  });
});
