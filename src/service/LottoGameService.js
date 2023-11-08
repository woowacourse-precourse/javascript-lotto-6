import InputView from '../view/inputView.js';
import LottoStatistics from '../domain/LottoStatistics.js';
import OutputView from '../view/OutputView.js';

class LottoGameService {
  constructor(lottoGame) {
    this.lottoGame = lottoGame;
    this.lottoStatistics = new LottoStatistics();
  }

  async getInputAndGenerateLottoTickets() {
    const purchaseMoney = await InputView.readPurchaseMoney();
    this.lottoGame.generateLottoTickets(purchaseMoney);
  }

  printLottoTickets() {
    OutputView.printLottoTicketsCount(
      this.lottoGame.getLottoCount(),
      this.lottoGame.getLottoTickets(),
    );
  }

  async userInputAndSetWinningNumbers() {
    const winningNumber = await InputView.readWinningNumber();
    const bonusNumber = await InputView.readBonusNumber(winningNumber);
    this.lottoGame.setWinningNumbers(winningNumber, bonusNumber);
  }

  calculatePrizeDetail() {
    this.lottoGame.getLottoTickets().forEach((ticket) => {
      const [matchingNumbersCount, isMatchBonus] =
        this.lottoStatistics.countMatchNumber(
          ticket,
          this.lottoGame.getWinningNumber(),
          this.lottoGame.getBonusNumber(),
        );
      this.lottoStatistics.updateResults(matchingNumbersCount, isMatchBonus);
    });
    return this.lottoStatistics.getResults();
  }

  calculateProfitRate() {
    const purchaseMoney = this.lottoGame.getPurchaseMoney();
    return this.lottoStatistics.updateProfitRate(purchaseMoney);
  }

  calculateWinningResult() {
    this.prizeDetail = this.calculatePrizeDetail();
    this.profitRate = this.calculateProfitRate();
  }

  printWinningResult() {
    OutputView.printLottoStatistics(this.prizeDetail, this.profitRate);
  }
}

export default LottoGameService;
