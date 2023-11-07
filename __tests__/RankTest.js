import Rank from '../src/Rank.js';

describe('Rank 클래스 테스트', () => {
  test('Rank 객체 생성 테스트', () => {
    const rank = new Rank(5, 3, 5000);
    expect(rank.ranking).toBe(5);
    expect(rank.matchNumbers).toBe(3);
    expect(rank.count).toBe(0);
    expect(rank.winnings).toBe(5000);
  });
});
