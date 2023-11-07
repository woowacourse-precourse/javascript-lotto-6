import Lotto from '../src/Lotto.js';
import LottoTicket from '../src/Model/LottoTicket.js';

describe('로또 티켓 데이터 클래스에 대한 테스트', () => {
  test('로또 번호로 구성된 티켓 정보가 업데이트 되는가?', () => {
    const lottoTicket = LottoTicket.getInstance();
    const ticket = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 6]),
    ];

    lottoTicket.saveSpecificTypeData('ticket', ticket);
    expect(lottoTicket.ticket.length === ticket.length).toBeTruthy();
    expect(lottoTicket.ticket).toEqual(ticket);
  });

  test('로또 당첨 번호가 티켓 정보에 업데이트가 되는가?', () => {
    const lottoTicket = LottoTicket.getInstance();
    const winNums = '1,2,3,4,5,6';
    const answer = [1, 2, 3, 4, 5, 6];

    lottoTicket.saveSpecificTypeData('win', winNums);
    expect(lottoTicket.winNums).toEqual(answer);
  });

  test('보너스 번호가 티켓 정보에 업데이트가 되는가?', () => {
    const lottoTicket = LottoTicket.getInstance();
    const bonusNum = '8';
    const answer = 8;

    lottoTicket.saveSpecificTypeData('bonus', bonusNum);
    expect(lottoTicket.bonusNum).toEqual(answer);
  });
});
