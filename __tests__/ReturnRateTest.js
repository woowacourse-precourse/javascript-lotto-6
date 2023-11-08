import ReturnRate from '../src/models/ReturnRate';

describe('수익률 클래스 테스트', () => {
  test('작동 테스트', () => {
    const purchaseAmount = 8000;
    const lottoTicketResult = [1, 0, 0, 0, 0]; // 5등 1개
    const returnRate = new ReturnRate(purchaseAmount, lottoTicketResult);
    const result = returnRate.getReturnRate();
    const answer = 62.5;
    expect(result).toEqual(answer);
  });
});
