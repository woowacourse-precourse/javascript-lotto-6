import LottoTicket from '../src/Model/LottoTicket';

describe('로또 티켓 데이터 클래스에 대한 테스트', () => {
  test('로또 번호로 구성된 티켓 정보가 업데이트 되는가?', () => {
    const lottoTicket = LottoTicket.getInstance();

    lottoTicket.saveSpecificTypeData('ticket', ticket);
    expect(lottoTicket.ticket).toBe(answer);
  });

  test('로또 당첨 번호가 티켓 정보에 업데이트가 되는가?', () => {
    lottoTicket.saveSpecificTypeData('win', winNums);
    expect(lottoTicket.winNums).toBe(answer);
  });

  test('보너스 번호가 티켓 정보에 업데이트가 되는가?', () => {
    lottoTicket.saveSpecificTypeData('bonus', bonusNum);
    expect(lottoTicket.bonusNum).toBe(answer);
  });
});