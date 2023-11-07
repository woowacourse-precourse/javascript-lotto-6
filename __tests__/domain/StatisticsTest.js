import { MATCH_COUNT, PRIZE, RANK } from '../../src/constants/statistics';
import { LOTTO_PRICE } from '../../src/constants/setting';
import Statistics from '../../src/domain/Statistics';

describe('통계 클래스 등수 테스트', () => {
  let statistics;

  beforeEach(() => {
    statistics = new Statistics();
  });

  describe('5등', () => {
    test('일치 개수 2개, 보너스 번호 일치', () => {
      const matchResult = { count: 2, bonus: true };

      expect(statistics.getRank(matchResult)).toBe(RANK.fifth);
    });

    test('일치 개수 3개, 보너스 번호 불일치', () => {
      const matchResult = { count: 3, bonus: false };

      expect(statistics.getRank(matchResult)).toBe(RANK.fifth);
    });
  });

  describe('4등', () => {
    test('일치 개수 3개, 보너스 번호 일치', () => {
      const matchResult = { count: 3, bonus: true };

      expect(statistics.getRank(matchResult)).toBe(RANK.fourth);
    });

    test('일치 개수 4개, 보너스 번호 불일치', () => {
      const matchResult = { count: 4, bonus: false };

      expect(statistics.getRank(matchResult)).toBe(RANK.fourth);
    });
  });

  describe('3등', () => {
    test('일치 개수 4개, 보너스 번호 일치', () => {
      const matchResult = { count: 4, bonus: true };

      expect(statistics.getRank(matchResult)).toBe(RANK.third);
    });

    test('일치 개수 5개, 보너스 번호 불일치', () => {
      const matchResult = { count: 5, bonus: false };

      expect(statistics.getRank(matchResult)).toBe(RANK.third);
    });
  });

  describe('2등', () => {
    test('일치 개수 5개, 보너스 번호 불일치', () => {
      const matchResult = { count: 5, bonus: true };

      expect(statistics.getRank(matchResult)).toBe(RANK.second);
    });
  });

  describe('1등', () => {
    test('일치 개수 6개', () => {
      const matchResult = { count: 6, bonus: false };

      expect(statistics.getRank(matchResult)).toBe(RANK.first);
    });
  });
});

describe('통계 클래스 수익률 테스트', () => {
  let statistics;
  let revenueRate;

  beforeEach(() => {
    statistics = new Statistics();
    revenueRate = 0;
  });

  test.each([
    { number: 1, rank: RANK.first, money: 1000 },
    { number: 2, rank: RANK.second, money: 1000 },
    { number: 3, rank: RANK.third, money: 1000 },
    { number: 4, rank: RANK.fourth, money: 1000 },
    { number: 5, rank: RANK.fifth, money: 1000 },
  ])('$number등', ({ rank, money }) => {
    const count = MATCH_COUNT[rank];
    const bonus = rank === RANK.second;
    const match = { count, bonus };
    statistics.updateTable(match);

    const expectRevenueRate = (PRIZE[rank] / LOTTO_PRICE) * 100;
    revenueRate = statistics.calculateRevenueRate(money);

    expect(revenueRate).toBe(expectRevenueRate);
  });
});
