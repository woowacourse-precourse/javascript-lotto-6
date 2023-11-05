import Lotto from '../models/Lotto.js';
import LottoGenerator from '../models/LottoGenerator.js';
import LottoTicket from '../models/LottoTicket.js';
import PurchaseAmount from '../models/PurchaseAmount.js';
import WinningNumber from '../models/WinnigNumber.js';

class LottoController {
  #lottoCount;
  #winningNumber;
  constructor(inputView, outputView) {
    this.inputView = inputView;
    this.outputView = outputView;
  }

  async start() {
    await this.setLottoCount();
    const lottoTicket = this.setLottoTicket();
    this.outputView.printLottoCount(this.#lottoCount);
    this.outputView.printLotto(lottoTicket);
    await this.setWinningNumber();
  }

  async setLottoCount() {
    while (true) {
      let purchaseAmountInput;
      try {
        purchaseAmountInput = await this.inputView.getPurchaseAmount();
        const purchaseAmount = new PurchaseAmount(purchaseAmountInput);
        this.#lottoCount = purchaseAmount.getLottoCount();
        break;
      } catch (error) {
        this.outputView.printError(error.message);
      }
    }
  }

  setLottoTicket() {
    const lottoTicket = new LottoTicket();
    while (lottoTicket.getLottoTicketLength() !== this.#lottoCount) {
      try {
        const lotto = new Lotto(LottoGenerator.generator());
        lottoTicket.addLottoToLottoTicket(lotto.getLotto());
      } catch (error) {
        this.outputView.printError(error.message);
      }
    }
    return lottoTicket.getLottoTicket();
  }

  async setWinningNumber() {
    while (true) {
      let winningNumberInput;
      try {
        winningNumberInput = await this.inputView.getWinningNumber();
        const winningNumber = new WinningNumber(winningNumberInput);
        this.#winningNumber = winningNumber.getWinningNumber();
        break;
      } catch (error) {
        this.outputView.printError(error.message);
      }
    }
  }
}

export default LottoController;
