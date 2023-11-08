import Bonus from './Bonus.js';
import InputView from './InputView.js';
import Lotto from './Lotto.js';
import Issuer from './Issuer.js';
import Matcher from './Matcher.js';
import OutputView from './OutputView.js';
import ReturnCalculator from './ReturnCalculator.js';

class Controller {
  #purchaseAmount;

  #lottoTicketList;

  #winningNumbers;

  #bonusNumber;

  async progress() {
    await this.#handlerErrorAndProceed(this.#getLottoTicketList);
    this.#displayLottoTicket();
    await this.#handlerErrorAndProceed(this.#getWinningNumbers);
    await this.#handlerErrorAndProceed(this.#getBonusNumber);
    const matchStatus = await this.#getMatchStatus();
    this.#displayWinningStat(matchStatus);
    const rateOfReturn = await this.#getRateOfReturn(this.#purchaseAmount, matchStatus);
    this.#displayRateOfReturn(rateOfReturn);
  }

  async #handlerErrorAndProceed(method) {
    try {
      await method.call(this);
    } catch (error) {
      OutputView.printMessage(error.message);
      await this.#handlerErrorAndProceed(method);
    }
  }

  async #getLottoTicketList() {
    const inputLottoPurchaseAmount = await InputView.readLottoPurchaseAmount();
    this.#lottoTicketList = new Issuer(inputLottoPurchaseAmount).tickets;
    this.#purchaseAmount = Number(inputLottoPurchaseAmount);
  }

  #displayLottoTicket() {
    OutputView.printLottoTicket(this.#lottoTicketList);
  }

  async #getWinningNumbers() {
    this.inputWinningNumbers = await InputView.readLottoWinningNumbers();
    this.#validateWinningNumbers(this.inputWinningNumbers);
    this.inputWinningNumbers = this.inputWinningNumbers.replace(/\s/g, '');
    this.inputWinningNumbers = this.inputWinningNumbers.split(',');
    this.inputWinningNumbers = this.inputWinningNumbers.map((number) => Number(number));
    this.#winningNumbers = new Lotto(this.inputWinningNumbers).winningNumbers;
  }

  #validateWinningNumbers(inputWinningNumbers) {
    if (!inputWinningNumbers.includes(',')) {
      throw new Error('[ERROR] 로또 번호는 콤마로 구분하여 입력하여야 합니다.');
    }
  }

  async #getBonusNumber() {
    this.inputBonusNumber = await InputView.readLottoBonusNumber();
    this.#bonusNumber = new Bonus(this.#winningNumbers, this.inputBonusNumber).bonusNumber;
  }

  async #getMatchStatus() {
    return new Matcher(this.#lottoTicketList, this.#winningNumbers, this.#bonusNumber).matchStatus;
  }

  async #getRateOfReturn(purchaseAmount, matchStatus) {
    return new ReturnCalculator(purchaseAmount, matchStatus).rateOfReturn;
  }

  #displayWinningStat(matchStatus) {
    OutputView.printWinningStat(matchStatus);
  }

  #displayRateOfReturn(rateOfReturn) {
    OutputView.printRateOfReturn(rateOfReturn);
  }
}

export default Controller;
