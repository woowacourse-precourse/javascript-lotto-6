import Bonus from './Bonus.js';
import InputView from './InputView.js';
import Lotto from './Lotto.js';
import LottoTicket from './LottoTicket.js';
import OutputView from './OutputView.js';

class Controller {
  #lottoTicketList;

  #winningNumbers;

  #bonusNumber;

  async progress() {
    await this.#handlerErrorAndProceed(this.#getLottoTicketList);
    this.#displayLottoTicket();
    await this.#handlerErrorAndProceed(this.#getWinningNumbers);
    await this.#handlerErrorAndProceed(this.#getBonusNumber);
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
    this.#bonusNumber = new Bonus(
      this.#winningNumbers,
      inputBonusNumber,
    ).bonusNumber;
  }
}

export default Controller;
