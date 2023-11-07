import calcProfit from '../src/utils/calcProfit';
import formatLottoMatchResults from '../src/utils/formatLottoMatchResults';
import formatLottoNumbers from '../src/utils/formatLottoNumbers';

describe('💙 Util 함수를 테스트합니다. ฅ^._.^ฅ', () => {
  test('[formatLottoNumbers] lottoNumbers를 인자로 받아 포매팅된 문자열을 반환해요.', () => {
    const lottoNumbers = [8, 21, 23, 41, 42, 43];
    const expectedResult = '[8, 21, 23, 41, 42, 43]';

    expect(formatLottoNumbers(lottoNumbers)).toBe(expectedResult);
  });

  test('[calcProfit] 구입 금액과 당첨 금액을 인자로 받아 포매팅된 수익률을 반환해요.', () => {
    const mockData = {
      expectedResults: ['62.5%', '100,000.0%'],
      purchaseAmounts: [8_000, 30_000],
      winningAmounts: [5_000, 30_000_000],
    };

    mockData.expectedResults.forEach((expectedResult, i) => {
      expect(
        calcProfit(mockData.purchaseAmounts[i], mockData.winningAmounts[i]),
      ).toBe(expectedResult);
    });
  });

  test('[formatLottoMatchResults] 당첨 번호 일치 개수 배열과 보너스 번호 보유 여부 배열을 객체로 포매팅해요.', () => {
    const winningMatchCounts = [3, 5, 0];
    const hasBonusMatches = [false, true, false];

    const formattedResults = formatLottoMatchResults(
      winningMatchCounts,
      hasBonusMatches,
    );

    expect(formattedResults).toEqual([
      { count: 3, hasBonusNumber: false },
      { count: 5, hasBonusNumber: true },
      { count: 0, hasBonusNumber: false },
    ]);
  });

  test('[formatLottoMatchResults] 당첨 번호 일치 배열과 보너스 번호 보유 여부 배열이 비어 있으면 빈 배열을 반환해요.', () => {
    const winningMatchCounts = [];
    const hasBonusMatches = [];

    const formattedResults = formatLottoMatchResults(
      winningMatchCounts,
      hasBonusMatches,
    );

    expect(formattedResults).toEqual([]);
  });
});
