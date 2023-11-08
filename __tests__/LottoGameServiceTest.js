import LottoGameService from '../src/service/LottoGameService.js';
import LottoGame from '../src/domain/LottoGame.js';
import LottoStatistics from '../src/domain/LottoStatistics.js';
describe('LottoGameService 클래스 테스트', () => {
  let lottoGameService;

  beforeEach(() => {
    lottoGameService = new LottoGameService(new LottoGame());
  });

  it('lottoGame을 기반으로 로또 당첨 내역을 올바르게 계산되어야 한다.', () => {
    lottoGameService.lottoGame.generateLottoTickets(3000);
    lottoGameService.lottoGame.setWinningNumbers('1,2,3,4,5,6', '7');

    jest
      .spyOn(lottoGameService.lottoStatistics, 'countMatchNumber')
      .mockReturnValueOnce([6, false])
      .mockReturnValueOnce([5, false])
      .mockReturnValueOnce([5, true]);

    lottoGameService.calculatePrizeDetail();

    expect(lottoGameService.lottoStatistics.getResults()).toEqual({
      FIRST: 1,
      SECOND: 1,
      THIRD: 1,
      FOURTH: 0,
      FIFTH: 0,
      profits: 2031500000,
    });
  });

  it('투자금이 주어졌을 때 당첨내역을 기반으로 수익률을 올바르게 계산되어야 한다.', () => {
    jest
      .spyOn(lottoGameService.lottoGame, 'getPurchaseMoney')
      .mockReturnValue(8000);

    lottoGameService.lottoStatistics.results = {
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 0,
      profits: 5000,
    };
    const profitRate = lottoGameService.calculateProfitRate();

    expect(profitRate).toBe('62.5');
  });
});
