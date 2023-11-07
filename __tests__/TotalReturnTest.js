import totalReturn from '../src/module/TotalReturn';

describe('수익률 계산 테스트', () => {
  test('로또 5개 구입 후 1개의 로또에서 3개 번호를 맞추면 수익률 100%이다.', () => {
    const PURCHASED_LOTTO_AMOUNT = 5000;
    const MATCH_COUNT = {
      threeMatches: 1,
      fourMatches: 0,
      fiveMatches: 0,
      fiveBonusMatches: 0,
      sixMatches: 0,
    };
    expect(totalReturn(PURCHASED_LOTTO_AMOUNT, MATCH_COUNT)).toBe('100.0');
  });

  test('로또 8개 구입 후 1개의 로또에서 3개 번호를 맞추면 수익률 62.5%이다.', () => {
    const PURCHASED_LOTTO_AMOUNT = 8000;
    const MATCH_COUNT = {
      threeMatches: 1,
      fourMatches: 0,
      fiveMatches: 0,
      fiveBonusMatches: 0,
      sixMatches: 0,
    };
    expect(totalReturn(PURCHASED_LOTTO_AMOUNT, MATCH_COUNT)).toBe('62.5');
  });

  test('로또 12개 구입 후 3개의 로또에서 3개 번호, 2개의 로또에서 4개 번호를 맞추면 수익률 958.3%이다.', () => {
    const PURCHASED_LOTTO_AMOUNT = 12000;
    const MATCH_COUNT = {
      threeMatches: 3,
      fourMatches: 2,
      fiveMatches: 0,
      fiveBonusMatches: 0,
      sixMatches: 0,
    };
    expect(totalReturn(PURCHASED_LOTTO_AMOUNT, MATCH_COUNT)).toBe('958.3');
  });

  test('로또 10개 구입 후 모든 로또에서 번호를 못 맞추면 수익률 0%이다.', () => {
    const PURCHASED_LOTTO_AMOUNT = 10000;
    const MATCH_COUNT = {
      threeMatches: 0,
      fourMatches: 0,
      fiveMatches: 0,
      fiveBonusMatches: 0,
      sixMatches: 0,
    };
    expect(totalReturn(PURCHASED_LOTTO_AMOUNT, MATCH_COUNT)).toBe('0.0');
  });
});
