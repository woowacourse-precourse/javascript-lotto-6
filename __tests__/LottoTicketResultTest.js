import LottoTicketResult from '../src/models/LottoTicketResult';

describe('로또 티켓 결과 테스트', () => {
  test('작동 테스트', () => {
    const lottoTicket = [
      [1, 2, 3, 4, 5, 6], // 1등
      [1, 2, 3, 4, 5, 7], // 2등
    ];
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lottoTicketResult = new LottoTicketResult(
      lottoTicket,
      winningNumber,
      bonusNumber
    );
    const result = lottoTicketResult.getLottoTicketResult();
    const answer = [0, 0, 0, 1, 1]; // 순서대로 5등 4등 3등 2등 1등
    expect(result).toEqual(answer);
  });
});
