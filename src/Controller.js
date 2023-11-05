import InputView from './InputView.js';
import Lotto from './Lotto.js';
import LottoTicket from './LottoTicket.js';
import OutputView from './OutputView.js';

class Controller {
  #lottoTicketList;

  #winningNumbers;

  async progress() {
    try {
      await this.#getLottoTicketList();
    } catch (error) {
      OutputView.printMessage(error.message);
      await this.#getLottoTicketList();
    }
    this.#displayLottoTicket();
    try {
      await this.#getWinningNumbers();
    } catch (error) {
      OutputView.printMessage(error.message);
      await this.#getWinningNumbers();
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
}

export default Controller;
