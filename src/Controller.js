import Bonus from './Bonus.js';
import InputView from './InputView.js';
import Lotto from './Lotto.js';
import Issuer from './Issuer.js';
import Matcher from './Matcher.js';
import OutputView from './OutputView.js';
import Calculator from './Calculator.js';
import Purchaser from './Purchaser.js';
import { WINNING_NUMBER } from './constants/Error.js';
import { GAME, SYMBOL } from './constants/Setting.js';

class Controller {
  #purchaseAmount;

  #winningNumbers;

  #bonusNumber;

  #tickets;

  async progress() {
    await this.#handlerPurchasePhase();
    await this.#handlerDrawPhase();
    await this.#handlerResultPhase();
  }

  async #handlerPurchasePhase() {
    await this.#handlerErrorAndProceed(this.#getPurchaseAmount);
    this.#tickets = await this.#getLottoTicketList();
    this.#displayLottoTicket(this.#tickets);
  }

  async #handlerDrawPhase() {
    await this.#handlerErrorAndProceed(this.#getWinningNumbers);
    await this.#handlerErrorAndProceed(this.#getBonusNumber);
  }

  async #handlerResultPhase() {
    const matchStatus = await this.#getMatchStatus(
      this.#tickets,
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
    const inputLottoPurchaseAmount = await InputView.readLottoPurchaseAmount();
    this.#purchaseAmount = new Purchaser(inputLottoPurchaseAmount).purchaseAmount;
  }

  async #getLottoTicketList() {
    return new Issuer(this.#purchaseAmount).tickets;
  }

  #displayLottoTicket(tickets) {
    OutputView.printLottoTicket(tickets);
  }

  async #getWinningNumbers() {
    const inputWinningNumbers = await InputView.readLottoWinningNumbers();
    this.#validateWinningNumbers(inputWinningNumbers);
    const winningNumbers = this.#convertWinningNumbers(inputWinningNumbers);
    this.#winningNumbers = new Lotto(winningNumbers).winningNumbers;
  }

  #convertWinningNumbers(inputValue) {
    return inputValue
      .replace(GAME.removeSpaceRegex, SYMBOL.emptyString)
      .split(SYMBOL.separator)
      .map((number) => Number(number));
  }

  #validateWinningNumbers(inputWinningNumbers) {
    if (!inputWinningNumbers.includes(SYMBOL.separator)) {
      throw new Error(WINNING_NUMBER.withoutComma);
    }
  }

  async #getBonusNumber() {
    const inputBonusNumber = await InputView.readLottoBonusNumber();
    this.#bonusNumber = new Bonus(this.#winningNumbers, inputBonusNumber).bonusNumber;
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
