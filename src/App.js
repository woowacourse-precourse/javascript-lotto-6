import createLottoTickets from './domain/LottoSetup';
import {
  getBonusNumber,
  getLottoPurchaseAmount,
  getWinningLottoNumbers,
} from './ui/Input';
import {
  printLottoTickets,
  analyzeProfitRate,
  printLottoTotalResult,
} from './ui/Output';

class App {
  constructor() {
    this.lottoPurchaseAmount = 0;
    this.lottoTickets = [];
    this.winningLotto = [];
    this.bonusNumber = 0;
    this.profitRate = 0;
    this.lottoResult = {
      fifth: 0,
      forth: 0,
      third: 0,
      second: 0,
      first: 0,
    };
  }

  async play() {
    await this.purchaseLottoTickts();
    await this.checkWinningTickets();
    this.displayLottoProfit();
  }

  async purchaseLottoTickts() {
    this.lottoPurchaseAmount = await getLottoPurchaseAmount();
    this.lottoTickets = createLottoTickets(this.lottoPurchaseAmount);
    printLottoTickets(this.lottoTickets);
  }

  async checkWinningTickets() {
    const lotto = await getWinningLottoNumbers();
    this.winningLotto = lotto.getLottoNumbers();
    this.bonusNumber = await getBonusNumber(this.winningLotto);
    this.lottoResult = lotto.evaluateLottoTickets(
      this.lottoTickets,
      this.bonusNumber,
      this.lottoResult,
    );
  }

  displayLottoProfit() {
    this.profitRate = analyzeProfitRate(
      this.lottoPurchaseAmount,
      this.lottoResult,
    );
    printLottoTotalResult(this.lottoResult, this.profitRate);
  }
}

export default App;
