import InputView from './InputView.js';
import Lotto from './Lotto.js';
import LottoTicket from './LottoTicket.js';
import OutputView from './OutputView.js';

class Controller {
  #lottoTicketList;

  #winningNumbers;

  async progress() {
    try {
      await this.#generateLottoTicketList();
    } catch (error) {
      OutputView.printMessage(error.message);
      await this.#generateLottoTicketList();
    }
    this.#displayLottoTicket();
    try {
      await this.#generateLottoMatching();
    } catch (error) {
      OutputView.printMessage(error.message);
      await this.#generateLottoMatching();
    }
  }

  async #generateLottoTicketList() {
    const inputLottoPurchaseAmount = await InputView.readLottoPurchaseAmount();
    this.#lottoTicketList = new LottoTicket(
      inputLottoPurchaseAmount,
    ).getLottoList;
  }

  #displayLottoTicket() {
    OutputView.printLottoTicket(this.#lottoTicketList);
  }

  async #generateLottoMatching() {
    const inputLottoWinningNumbers = await InputView.readLottoWinningNumbers();
    this.#winningNumbers = new Lotto(inputLottoWinningNumbers).getWinningNumber;
  }
}

export default Controller;
