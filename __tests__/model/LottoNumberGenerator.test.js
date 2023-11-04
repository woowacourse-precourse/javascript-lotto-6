import LottoNumberGenerator from '../../src/model/LottoNumberGenerator.js';

// LottoNumberGenerator 모듈을 테스트합니다
describe('LottoNumberGenerator', () => {
  it('개수에 맞는 로또 생성', () => {
    // given
    const count = 5; // 원하는 로또 번호 배열 개수

    // when
    const lottoNumbers = LottoNumberGenerator.run(count);

    // then
    expect(lottoNumbers).toHaveLength(count);

    // 각 로또 번호 배열이 6개의 유일한 숫자로 이루어져 있는지 확인
    lottoNumbers.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Array);
      expect(lotto).toHaveLength(6);
      expect(new Set(lotto).size).toBe(6);
      lotto.forEach((number) => {
        expect(number).toBeGreaterThanOrEqual(1);
        expect(number).toBeLessThanOrEqual(45);
      });
    });
  });
});

describe('LottoNumberGenerator', () => {
  test('개수에 맞는 로또 생성', () => {
    const count = 5; // 원하는 로또 번호 배열 개수
    const lottos = LottoNumberGenerator.run(count);

    expect(lottos).toHaveLength(count);

    // 각 로또 번호 배열이 6개의 유일한 숫자로 이루어져 있는지 확인
    lottos.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Array);
      expect(lotto).toHaveLength(6);
      expect(new Set(lotto).size).toBe(6);
      lotto.forEach((number) => {
        expect(number).toBeGreaterThanOrEqual(1);
        expect(number).toBeLessThanOrEqual(45);
      });
    });

    // 로또 번호 배열이 오름차순으로 정렬되어 있는지 확인
    lottos.forEach((lotto) => {
      for (let i = 1; i < lotto.length; i += 1) {
        expect(lotto[i - 1]).toBeLessThanOrEqual(lotto[i]);
      }
    });
  });
});
