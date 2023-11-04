import InputView from './InputView.js';
import LottoPurchase from './LottoTicket.js';
import OutputView from './OutputView.js';

class Controller {
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
    this.lottoPurchase = new LottoPurchase(inputLottoPurchaseAmount);
  }
}

export default Controller;
