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
    try {
      await this.#getBonusNumber();
    } catch (error) {
      OutputView.printMessage(error.message);
      await this.#getBonusNumber();
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
