import { LottoEvaluator } from '../src/LottoEvaluator';

describe('LottoEvaluator 테스트', () => {
  const dummyLottoList = [
    [1, 2, 3, 4, 5, 6], // 1등
    [1, 2, 3, 4, 5, 41], // 2등
    [1, 2, 3, 4, 5, 45], // 3등
    [1, 2, 3, 4, 42, 43], // 4등
    [1, 2, 3, 40, 41, 42], // 5등
    [7, 8, 9, 10, 11, 12], // 꽝
  ];
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 41;

  const lottoEvaluator = new LottoEvaluator(
    dummyLottoList,
    winningNumbers,
    bonusNumber
  );

  test('등수별 당첨 개수와 수익률을 반환', () => {
    const result = lottoEvaluator.evaluateLotto();
    expect(result.first).toBe(1); // 1등이 1개 있는지 검사
    expect(result.second).toBe(1); // 2등이 1개 있는지 검사
    expect(result.third).toBe(1); // 3등이 1개 있는지 검사
    expect(result.fourth).toBe(1); // 4등이 1개 있는지 검사
    expect(result.fifth).toBe(1); // 5등이 1개 있는지 검사

    const totalSpent = dummyLottoList.length * 1000;
    const earningsRate = (result.earnings / totalSpent) * 100;
    expect(earningsRate).toBeGreaterThan(0);
  });

  test('당첨 개수와 보너스 일치 여부를 반환', () => {
    const testLotto = [1, 2, 3, 4, 5, 41];
    const { matchCount, hasBonus } = lottoEvaluator.getCompareLotto(testLotto);
    expect(matchCount).toBe(5);
    expect(hasBonus).toBeTruthy();
  });

  test('result객체를 업데이트 하는지', () => {
    const result = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
      earnings: 0,
    };
    const compareLottoFirst = { matchCount: 6, hasBonus: false };
    lottoEvaluator.updateResult(result, compareLottoFirst);
    expect(result.first).toBe(1);
  });

  test('당첨된 로또등수에 대한 상금 추가', () => {
    const result = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
      earnings: 0,
    };
    lottoEvaluator.addWinning(result, 'first');
    expect(result.first).toBe(1);
    expect(result.earnings).toBe(lottoEvaluator.prizeMoney.first);
  });
});
