import { INPUT } from './constant/index.js';
import InputView from './View/InputView.js';
import LottoReturnRateCalculator from './LottoReturnRateCalculator.js';
import LottoResultCalculator from './LottoResultCalculator.js';
import LottoShop from './LottoShop.js';
import OutputView from './View/OutputView.js';
import Validator from './validator/Validator.js';

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
    this.#buyingPrice = await this.readBuyingPrice();
    this.#lottoTickets = LottoShop.issueLottoTickets(this.#buyingPrice);
    OutputView.printBuyingLottos(this.#lottoTickets);

    this.#winningNumbers = await this.readWinningNumbers();
    this.#bonusNumber = await this.readBonusNumber();

    const lottoResult = this.checkLottoResult();
    OutputView.printlottoResult(lottoResult);

    const returnRate = this.calculateLottoReturnRate(lottoResult);
    OutputView.printLottoReturnRate(returnRate);
  }

  async readBuyingPrice() {
    try {
      const buyingPrice = await InputView.readNumber(INPUT.BUYING_PRICE);
      Validator.validateBuyingPrice(buyingPrice);
      return buyingPrice;
    } catch (e) {
      OutputView.print(e.message);
      return await this.readBuyingPrice();
    }
  }

  async readWinningNumbers() {
    try {
      const winningNumbers = await InputView.readNumbers(INPUT.WINNING_NUMBERS);
      Validator.validateLottoNumbers(winningNumbers);
      return winningNumbers;
    } catch (e) {
      OutputView.print(e.message);
      return await this.readWinningNumbers();
    }
  }

  async readBonusNumber() {
    try {
      const bonusNumber = await InputView.readNumber(INPUT.BONUS_NUMBERS);
      Validator.validateBonusNumber(bonusNumber, this.#winningNumbers);
      return bonusNumber;
    } catch (e) {
      OutputView.print(e.message);
      return await this.readBonusNumber();
    }
  }

  checkLottoResult() {
    const verifier = new LottoResultCalculator({
      winningNumbers: this.#winningNumbers,
      bonusNumber: this.#bonusNumber,
    });
    return verifier.checkLottoResult(this.#lottoTickets);
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
