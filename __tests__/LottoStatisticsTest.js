import LottoStatistics from '../src/domain/LottoStatistics';
import { LOTTO_PRIZE } from '../src/util/constant/index';

describe('LottoStatistics 클래스 테스트', () => {
  let lottoStatistics;
  beforeEach(() => {
    lottoStatistics = new LottoStatistics();
  });

  it.each(['FIRST', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH'])(
    '당첨된 로또의 내역에 해당하는 개수를 맞게 계산해야 한다',
    (rank) => {
      lottoStatistics.trackResult(rank);
      expect(lottoStatistics.getResults()[rank]).toBe(1);
    },
  );

  it('당첨된 로또가 여러개라면 상금은 수익금에 더해져야 한다.', () => {
    const initialProfits = lottoStatistics.getResults().profits;

    lottoStatistics.trackResult('FIRST');
    const firstPrize = LOTTO_PRIZE.FIRST;

    const updatedProfits = lottoStatistics.getResults().profits;
    expect(updatedProfits).toBe(initialProfits + firstPrize);

    lottoStatistics.trackResult('SECOND');
    const secondPrize = LOTTO_PRIZE.SECOND;

    const finalProfits = lottoStatistics.getResults().profits;
    expect(finalProfits).toBe(updatedProfits + secondPrize);
  });

  it.each([
    { lottoTicket: [1, 23, 24, 25, 26, 27], expected: [1, false] },
    { lottoTicket: [1, 2, 24, 25, 26, 27], expected: [2, false] },
    { lottoTicket: [1, 2, 3, 25, 26, 27], expected: [3, false] },
    { lottoTicket: [1, 2, 3, 4, 26, 27], expected: [4, false] },
    { lottoTicket: [1, 2, 3, 4, 5, 27], expected: [5, false] },
    { lottoTicket: [1, 2, 3, 4, 5, 7], expected: [5, true] },
    { lottoTicket: [1, 2, 3, 4, 5, 6], expected: [6, false] },
  ])(
    '로또번호와 당첨번호가 몇개 일치하는지 / 로또번호와 보너스번호가 일치하면 bool값으로 계산해야한다.',
    ({ lottoTicket, expected }) => {
      const winningNumber = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const [matchingNumbersCount, isMatchBonus] =
        lottoStatistics.countMatchNumber(
          lottoTicket,
          winningNumber,
          bonusNumber,
        );
      expect(matchingNumbersCount).toBe(expected[0]);
      expect(isMatchBonus).toBe(expected[1]);
    },
  );

  it('update함수를 통해서 당첨된 로또의 내역이 올바르게 갱신되야 한다.', () => {
    const initialProfits = lottoStatistics.getResults().profits;
    lottoStatistics.updateResults(6, true);
    expect(lottoStatistics.getResults().FIRST).toBe(1);
    expect(lottoStatistics.getResults().profits).toBe(
      initialProfits + LOTTO_PRIZE.FIRST,
    );

    lottoStatistics.updateResults(5, true);
    expect(lottoStatistics.getResults().SECOND).toBe(1);
    expect(lottoStatistics.getResults().profits).toBe(
      initialProfits + LOTTO_PRIZE.FIRST + LOTTO_PRIZE.SECOND,
    );

    lottoStatistics.updateResults(5, false);
    expect(lottoStatistics.getResults().THIRD).toBe(1);
    expect(lottoStatistics.getResults().profits).toBe(
      initialProfits +
        LOTTO_PRIZE.FIRST +
        LOTTO_PRIZE.SECOND +
        LOTTO_PRIZE.THIRD,
    );
  });

  it('수익률은 소수점 둘째 자리에서 반올림되야 한다.', () => {
    lottoStatistics.trackResult('FIRST');
    lottoStatistics.trackResult('SECOND');

    const profitRate = lottoStatistics.updateProfitRate(
      LOTTO_PRIZE.FIRST + LOTTO_PRIZE.SECOND,
    );

    expect(profitRate).toBe('100.0');
  });
});
