import Bonus from './Bonus.js';
import InputView from './InputView.js';
import Lotto from './Lotto.js';
import Issuer from './Issuer.js';
import Matcher from './Matcher.js';
import OutputView from './OutputView.js';
import Calculator from './Calculator.js';
import Purchaser from './Purchaser.js';

class Controller {
  #purchaseAmount;

  #winningNumbers;

  #bonusNumber;

  async progress() {
    await this.#handlerErrorAndProceed(this.#getPurchaseAmount);
    const tickets = await this.#getLottoTicketList();
    this.#displayLottoTicket(tickets);
    await this.#handlerErrorAndProceed(this.#getWinningNumbers);
    await this.#handlerErrorAndProceed(this.#getBonusNumber);
    const matchStatus = await this.#getMatchStatus(
      tickets,
      this.#winningNumbers,
      this.#bonusNumber,
    );
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

  async #getPurchaseAmount() {
    const inputLottoPurchaseAmount = Number(await InputView.readLottoPurchaseAmount());
    this.#purchaseAmount = new Purchaser(inputLottoPurchaseAmount).purchaseAmount;
  }

  async #getLottoTicketList() {
    return new Issuer(this.#purchaseAmount).tickets;
  }

  #displayLottoTicket(tickets) {
    OutputView.printLottoTicket(tickets);
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
    this.inputBonusNumber = Number(await InputView.readLottoBonusNumber());
    this.#bonusNumber = new Bonus(this.#winningNumbers, this.inputBonusNumber).bonusNumber;
  }

  async #getMatchStatus(tickets, winningNumbers, bonusNumber) {
    return new Matcher(tickets, winningNumbers, bonusNumber).matchStatus;
  }

  async #getRateOfReturn(purchaseAmount, matchStatus) {
    return new Calculator(purchaseAmount, matchStatus).rateOfReturn;
  }

  #displayWinningStat(matchStatus) {
    OutputView.printWinningStat(matchStatus);
  }

  #displayRateOfReturn(rateOfReturn) {
    OutputView.printRateOfReturn(rateOfReturn);
  }
}

export default Controller;
