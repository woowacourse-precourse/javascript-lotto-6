import InputView from './InputView.js';
import LottoTicket from './LottoTicket.js';
import OutputView from './OutputView.js';

class Controller {
  #lottoTicketList;

  async progress() {
    try {
      await this.setLottoTicket();
    } catch (error) {
      OutputView.printMessage(error.message);
      await this.setLottoTicket();
    }
  }

  async setLottoTicket() {
    const inputLottoPurchaseAmount = await InputView.readLottoPurchaseAmount();
    this.#lottoTicketList = new LottoTicket(
      inputLottoPurchaseAmount,
    ).getLottoList;
  }
}

export default Controller;
