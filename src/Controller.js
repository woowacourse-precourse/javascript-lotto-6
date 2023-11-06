import Bonus from './Bonus.js';
import InputView from './InputView.js';
import Lotto from './Lotto.js';
import LottoTicket from './LottoTicket.js';
import Matcher from './Matcher.js';
import OutputView from './OutputView.js';

class Controller {
  #lottoTicketList;

  #winningNumbers;

  #bonusNumber;

  #matchStats;

  async progress() {
    await this.#handlerErrorAndProceed(this.#getLottoTicketList);
    this.#displayLottoTicket();
    await this.#handlerErrorAndProceed(this.#getWinningNumbers);
    await this.#handlerErrorAndProceed(this.#getBonusNumber);
    await this.#getMatchStats();
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

  async #getMatchStats() {
    this.#matchStats = new Matcher(
      this.#lottoTicketList,
      this.#winningNumbers,
      this.#bonusNumber,
    ).matchStats;
  }
}

export default Controller;
