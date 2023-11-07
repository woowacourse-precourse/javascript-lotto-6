import UserLottoModel from '../src/domain/UserLottoModel';

describe('UserLottoModel 클래스 테스트', () => {
  let userLottoModel;

  beforeEach(() => {
    userLottoModel = new UserLottoModel();
  });

  test('함수가 로또 티켓을 생성 (5개)', () => {
    userLottoModel.generateLottoTicket(1000 * 5);
    const lottoTickets = userLottoModel.getLottoTickets();
    expect(Array.isArray(lottoTickets)).toBe(true);
    expect(lottoTickets.length).toBe(5); 
  });

  test('함수가 로또 티켓을 생성 (3개)', () => {
    userLottoModel.generateLottoTicket(3000);
    const lottoTickets = userLottoModel.getLottoTickets();
    expect(Array.isArray(lottoTickets)).toBe(true);
    expect(lottoTickets.length).toBe(3);
  });

  test('함수가 로또 티켓을 생성 (0개)', () => {
    userLottoModel.generateLottoTicket(0);
    const lottoTickets = userLottoModel.getLottoTickets();
    expect(Array.isArray(lottoTickets)).toBe(true);
    expect(lottoTickets.length).toBe(0);
  });
});
