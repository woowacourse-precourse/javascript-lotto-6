import LottoCalculator from '../src/LottoCalculator';

describe('로또 계산기 클래스 테스트', () => {
  let lottoCalculator;
  beforeEach(() => {
    lottoCalculator = new LottoCalculator();
  });

  test('당첨 배열의 값을 모두 더해 총 수익금을 구한다.', () => {
    const ranks = [1, 1, 0, 1, 0];
    const expected = 30055000;
    const totalWinnings = lottoCalculator.addAllWinnings(ranks);

    expect(totalWinnings).toStrictEqual(expected);
  });

  test('총 수익금과 구입금액으로 총 수익률을 구한다.', () => {
    const totalWinnings = 30055000;
    const purchaseAmount = 3000;
    const expected = '1001833.3';
    const rateOfReturn = lottoCalculator.getRateOfReturn(
      totalWinnings,
      purchaseAmount,
    );

    expect(rateOfReturn).toStrictEqual(expected);
  });
});
