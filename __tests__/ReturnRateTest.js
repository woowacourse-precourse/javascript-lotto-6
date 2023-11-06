import ReturnRate from '../src/models/ReturnRate';

describe('수익률 클래스 테스트', () => {
  test('보너스 번호가 정수가 아니면 예외가 발생한다.', () => {
    const lottoCount = 8;
    const lottoTicketResult = [0, 0, 0, 0, 1];
    const returnRate = new ReturnRate(lottoCount, lottoTicketResult);
    const result = returnRate.getReturnRate();
    const answer = 62.5;
    expect(result).toEqual(answer);
  });
});
