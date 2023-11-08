import LottoGame from '../src/domain/LottoGame';

describe('LottoGame 클래스 테스트', () => {
  let lottoGame;

  beforeEach(() => {
    lottoGame = new LottoGame();
  });

  it('구입 금액에 따라 로또 티켓 수가 올바르게 계산되어야 한다.', () => {
    lottoGame.generateLottoTickets(5000);
    expect(lottoGame.calculateLottoCount()).toBe(5);

    lottoGame.generateLottoTickets(10000);
    expect(lottoGame.calculateLottoCount()).toBe(10);

    lottoGame.generateLottoTickets(1000);
    expect(lottoGame.calculateLottoCount()).toBe(1);
  });

  it('구입금액에 따라 로또티켓수를 설정하고, 로또티켓수만큼 로또가 발행되어야 한다.', () => {
    const purchaseMoney = 5000;
    lottoGame.generateLottoTickets(purchaseMoney);

    expect(lottoGame.getPurchaseMoney()).toBe(purchaseMoney);
    expect(lottoGame.getLottoCount()).toBe(5);
    expect(Array.isArray(lottoGame.getLottoTickets())).toBe(true);
    expect(lottoGame.getLottoTickets().length).toBe(5);
  });

  it('당첨번호와 보너스번호를 알맞게 설정하고 사용할 수 있어야 한다.', () => {
    const winningNumber = '1,2,3,4,5,6';
    const bonusNumber = '7';

    lottoGame.setWinningNumbers(winningNumber, bonusNumber);

    expect(lottoGame.getWinningNumber()).toEqual([1, 2, 3, 4, 5, 6]);
    expect(lottoGame.getBonusNumber()).toBe(7);
  });
});
