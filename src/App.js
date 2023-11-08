import LottoReturnRateCalculator from './LottoReturnRateCalculator.js';
import LottoResultChecker from './LottoResultChecker.js';
import LottoShop from './LottoShop.js';
import LottoView from './View/LottoView.js';

class App {
  #buyingPrice;
  #lottoTickets;
  #winningNumbers;
  #bonusNumber;

  constructor() {
    this.#buyingPrice = 0;
    this.#lottoTickets = [];
    this.#winningNumbers = [];
    this.#bonusNumber = undefined;
  }

  async play() {
    this.#buyingPrice = await LottoView.readBuyingPrice();
    this.#lottoTickets = LottoShop.issueLottoTickets(this.#buyingPrice);
    LottoView.printBuyingLottos(this.#lottoTickets);

    this.#winningNumbers = await LottoView.readWinningNumbers();
    this.#bonusNumber = await LottoView.readBonusNumber(this.#winningNumbers);

    const lottoResult = this.checkLottoResult();
    LottoView.printlottoResult(lottoResult);

    const returnRate = this.calculateLottoReturnRate(lottoResult);
    LottoView.printLottoReturnRate(returnRate);
  }

  checkLottoResult() {
    const checker = new LottoResultChecker({
      winningNumbers: this.#winningNumbers,
      bonusNumber: this.#bonusNumber,
    });
    return checker.checkLottoResult(this.#lottoTickets);
  }

  calculateLottoReturnRate(lottoResult) {
    const calculator = new LottoReturnRateCalculator({
      lottoResult,
      buyingPrice: this.#buyingPrice,
    });
    return calculator.calculateReturnRate();
  }
}

export default App;
