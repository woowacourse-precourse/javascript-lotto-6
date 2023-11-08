import { Console } from '@woowacourse/mission-utils';
import LottoResult from '../src/LottoResult';
import Statistics from '../src/Statistics';

describe('Statistics 클래스 테스트', () => {
  let statistics;

  beforeEach(() => {
    const results = [
      new LottoResult({ mainMatchCount: 0, isBonusMatched: false }),
      new LottoResult({ mainMatchCount: 3, isBonusMatched: false }),
      new LottoResult({ mainMatchCount: 4, isBonusMatched: false }),
      new LottoResult({ mainMatchCount: 5, isBonusMatched: false }),
      new LottoResult({ mainMatchCount: 5, isBonusMatched: true }),
      new LottoResult({ mainMatchCount: 6, isBonusMatched: false }),
    ];
    statistics = new Statistics(results);
  });

  describe('show 메서드 테스트', () => {
    test('결과를 콘솔에 출력해야한다.', () => {
      // given
      const spy = jest.spyOn(Console, 'print');
      const logs = [
        '\n당첨 통계\n---------',
        '3개 일치 (5,000원) - 1개',
        '4개 일치 (50,000원) - 1개',
        '5개 일치 (1,500,000원) - 1개',
        '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
        '6개 일치 (2,000,000,000원) - 1개',
        '총 수익률은 33859250.0%입니다.',
      ];

      // when
      statistics.show();

      // then
      logs.forEach((log) => {
        expect(spy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });
  });
});
