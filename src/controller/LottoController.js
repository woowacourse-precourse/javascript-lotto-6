import Lotto from '../models/Lotto.js';
import LottoGenerator from '../models/LottoGenerator.js';
import LottoTicket from '../models/LottoTicket.js';
import PurchaseAmount from '../models/PurchaseAmount.js';

class LottoController {
  #lottoCount;
  constructor(inputView, outputView) {
    this.inputView = inputView;
    this.outputView = outputView;
  }

  async start() {
    await this.setLottoCount();
    const lottoTicket = this.setLottoTicket();
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
}

export default LottoController;
