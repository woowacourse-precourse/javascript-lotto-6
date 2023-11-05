import ReturnRateCalculator from '../src/ReturnRateCalculator';

describe('ReturnRateCalculator 클래스 테스트', () => {
  test('로또 수익률 테스트', () => {
    const outcome = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 1,
    };
    expect(ReturnRateCalculator.getReturnRate(outcome, 8000)).toBe(62.5);
  });
});
