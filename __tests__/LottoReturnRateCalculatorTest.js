import LottoReturnRateCalculator from '../src/LottoReturnRateCalculator';

describe('LottoReturnRateCalculator 테스트', () => {
  test('로또 수익률을 계산한다.', () => {
    const lottoResult = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 2,
    };
    const buyingPrice = 11000;
    const lottoReturnRateCalculator = new LottoReturnRateCalculator({
      lottoResult,
      buyingPrice,
    });

    const returnRate = lottoReturnRateCalculator.calculateReturnRate();

    expect(returnRate).toBe(90.9);
  });
});
