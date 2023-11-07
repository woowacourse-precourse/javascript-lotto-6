import Stats from '../src/Stats.js';

describe('당첨 통계 클래스 테스트', () => {
  test('발행된 로또 정보와 당첨 번호, 보너스 번호를 가지고 올바른 당첨 통계와 수익 금액을 얻을 수 있다.', () => {
    // given
    const random = [
      [4, 6, 7, 8, 10, 12],
      [1, 2, 3, 4, 5, 6],
      [2, 4, 6, 8, 10, 12],
    ];
    const lotto = [2, 4, 6, 8, 10, 12];
    const BONUS = 7;
    const revenues = [30000000, 5000, 2000000000];
    const stats = [
      '3개 일치 (5,000원) - 1개',
      '4개 일치 (50,000원) - 0개',
      '5개 일치 (1,500,000원) - 0개',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
      '6개 일치 (2,000,000,000원) - 1개',
    ];
    const output = { revenues, stats };

    // when
    const statsObject = new Stats(random, lotto, BONUS);
    const revenuesAndStats = statsObject.getRevenuesAndStats();

    // then
    expect(revenuesAndStats).toEqual(output);
  });
});
