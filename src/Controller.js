import Bonus from './Bonus.js';
import InputView from './InputView.js';
import Lotto from './Lotto.js';
import LottoTicket from './LottoTicket.js';
import Matcher from './Matcher.js';
import OutputView from './OutputView.js';
import ReturnCalculator from './ReturnCalculator.js';

class Controller {
  #purchaseAmount;

  #lottoTicketList;

  #winningNumbers;

  #bonusNumber;

  #matchStatus;

  #rateOfReturn;

  async progress() {
    await this.#handlerErrorAndProceed(this.#getLottoTicketList);
    this.#displayLottoTicket();
    await this.#handlerErrorAndProceed(this.#getWinningNumbers);
    await this.#handlerErrorAndProceed(this.#getBonusNumber);
    await this.#getMatchStatus();
    await this.#getRateOfReturn();
    this.#displayWinningStat();
    this.#displayRateOfReturn();
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
    this.#lottoTicketList = new LottoTicket(inputLottoPurchaseAmount).lottoList;
    this.#purchaseAmount = Number(inputLottoPurchaseAmount);
  }

  #displayLottoTicket() {
    OutputView.printLottoTicket(this.#lottoTicketList);
  }

  async #getWinningNumbers() {
    const inputLottoWinningNumbers = await InputView.readLottoWinningNumbers();
    this.#winningNumbers = new Lotto(inputLottoWinningNumbers).winningNumbers;
  }

  async #getBonusNumber() {
    const inputBonusNumber = await InputView.readLottoBonusNumber();
    this.#bonusNumber = new Bonus(this.#winningNumbers, inputBonusNumber).bonusNumber;
  }

  async #getMatchStatus() {
    this.#matchStatus = new Matcher(
      this.#lottoTicketList,
      this.#winningNumbers,
      this.#bonusNumber,
    ).matchStatus;
  }

  async #getRateOfReturn() {
    this.#rateOfReturn = new ReturnCalculator(this.#purchaseAmount, this.#matchStatus).rateOfReturn;
  }

  #displayWinningStat() {
    OutputView.printWinningStat(this.#matchStatus);
  }

  #displayRateOfReturn() {
    OutputView.printRateOfReturn(this.#rateOfReturn);
  }
}

export default Controller;
